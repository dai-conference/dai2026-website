(() => {
  'use strict';

  const {events, papers} = window.DAI_PROGRAM;
  const days = [...new Set(events.map(event => event.day))].sort();
  const sessions = new Map(events.map(event => [event.id, event]));
  const paperLists = new Map();
  for (const paper of [...papers].sort((a, b) => a.start.localeCompare(b.start))) {
    if (!paperLists.has(paper.session)) paperLists.set(paper.session, []);
    paperLists.get(paper.session).push(paper);
  }

  const detailLinks = {
    w1: 'workshops.html#workshop-01', w2: 'workshops.html#workshop-02',
    'w3-am': 'workshops.html#workshop-03', 'w3-pm': 'workshops.html#workshop-03',
    w5: 'https://econworlds.org/activities/dai26-workshop/',
    t1: 'tutorials.html#tutorial-02', t2: 'tutorials.html#tutorial-01',
    t3: 'tutorials.html#tutorial-03', k2: 'keynotes.html#weinan-e',
    k3: 'keynotes.html#michael-p-wellman'
  };

  const $ = id => document.getElementById(id);
  const esc = value => String(value).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[ch]);
  const formatDate = (day, options) =>
    new Intl.DateTimeFormat('en-GB', {timeZone: 'UTC', ...options}).format(new Date(day + 'T00:00:00Z'));
  const shortDate = day => formatDate(day, {day: 'numeric', month: 'short'});
  const trackLine = paper => esc(paper.track) + (paper.status === 'TBD' ? ' · Presentation TBD' : '');
  const clockRange = (start, end) => esc(start) + '–' + esc(end);

  function paperRow(paper) {
    return `<li class="paper-row" id="${esc(paper.id)}" tabindex="-1">
      <span class="paper-time">${clockRange(paper.start, paper.end)}</span>
      <div><strong>${esc(paper.title)}</strong><p>${esc(paper.authors)}</p><small>${trackLine(paper)}</small></div>
    </li>`;
  }

  function sessionItem(event, showEnd) {
    const list = paperLists.get(event.id);
    const number = event.id.split('-')[1];
    return `<details class="oral-session" id="${esc(event.id)}">
      <summary><span><small class="event-kind">Paper session ${esc(number)}${showEnd ? ' · Until ' + esc(event.end) : ''}</small>
      <strong>${esc(event.title)}</strong></span>
      <span class="paper-count">${list.length} papers <i aria-hidden="true"></i></span></summary>
      <ol class="paper-list">${list.map(paperRow).join('')}</ol></details>`;
  }

  function eventItem(event, showEnd) {
    if (event.type === 'paper') return sessionItem(event, showEnd);

    const prefix = event.title.match(/^(Workshop|Tutorial|Keynote) · /);
    const kind = prefix?.[1];
    const title = prefix ? event.title.slice(prefix[0].length) : event.title;
    const labels = {other: 'Plenary', poster: 'Posters', social: 'Social event'};
    const label = kind || labels[event.type] || '';
    const link = detailLinks[event.id];
    const linkTarget = link?.startsWith('https://') ? ' target="_blank" rel="noopener noreferrer"' : '';
    const name = link ? `<a href="${link}"${linkTarget}>${esc(title)} <span aria-hidden="true">↗</span></a>` : esc(title);
    const info = [];
    if (event.talkTitle) info.push(event.talkTitle === 'TBD' ? 'Talk title TBD.' : event.talkTitle);
    if (event.type === 'poster') info.push('Participation is optional. Registration, location, and presenters are TBD.');
    if (event.host !== 'TBD' && event.host) info.push('Chair: ' + event.host);
    if (event.location !== 'TBD' && event.location) info.push(event.location);
    if (showEnd) info.push('Until ' + event.end);
    return `<div class="event-item event-${esc(event.type)}" id="${esc(event.id)}">
      ${label ? `<small class="event-kind">${esc(label)}</small>` : ''}
      <strong>${name}</strong>${info.map(line => `<p>${esc(line)}</p>`).join('')}</div>`;
  }

  function timeBlock(start, items) {
    const sameEnd = items.every(event => event.end === items[0].end);
    const untimed = start === 'TBD';
    const endLabel = sameEnd && !untimed ? '– ' + esc(items[0].end) : '';
    const concurrent = items.length > 1;
    const compact = items.length === 1 && items[0].type === 'break';
    const alignedWorkshops = items.some(event => event.id === 'w3-am' || event.id === 'w3-pm');
    return `<div class="time-block${compact ? ' break-block' : ''}">
      <div class="time-rail"><span>${untimed ? 'Evening' : esc(start)}</span><small>${untimed ? 'Time TBD' : endLabel}</small>
      ${concurrent ? `<em>${items.length} in parallel</em>` : ''}</div>
      <div class="${items[0].type === 'paper' ? 'oral-group' : 'event-grid'}${alignedWorkshops ? ' aligned-workshops' : ''}">${items.map(event => eventItem(event, !sameEnd)).join('')}</div>
    </div>`;
  }

  function buildDay(day, index) {
    const parallelOrder = {t1: 0, 'w3-am': 1, w2: 2};
    const items = events.filter(event => event.day === day).sort((a, b) =>
      a.start.localeCompare(b.start) ||
      (parallelOrder[a.id] ?? 0) - (parallelOrder[b.id] ?? 0) || a.id.localeCompare(b.id));
    const phase = items.some(event => event.type === 'paper') ? 'Main conference' : 'Workshops & tutorials';
    const socialLabels = items.filter(event => event.type === 'social').map(event =>
      `<small class="tab-social">${esc(event.title.replace(/^(Welcome|Conference) /, ''))}</small>`).join('');
    const groups = new Map();
    for (const event of items) {
      if (!groups.has(event.start)) groups.set(event.start, []);
      groups.get(event.start).push(event);
    }
    const weekday = formatDate(day, {weekday: 'long'});
    const dayNumber = formatDate(day, {day: '2-digit'});
    const month = formatDate(day, {month: 'short'});
    $('day-tabs').insertAdjacentHTML('beforeend', `<button type="button" role="tab" id="tab-${day}"
      aria-controls="day-${day}" aria-selected="${index === 0}" tabindex="${index ? -1 : 0}" data-day="${day}">
      <span class="tab-date">${dayNumber}</span><span class="tab-copy"><span>${weekday.slice(0, 3)} · ${month}</span>
      <small>${esc(phase)}</small>${socialLabels}</span></button>`);
    $('agenda-days').insertAdjacentHTML('beforeend', `<section class="day-panel" role="tabpanel" id="day-${day}"
      aria-labelledby="tab-${day}" tabindex="0" ${index ? 'hidden' : ''}>
      <header class="day-heading"><div><p class="day-number">Day ${String(index + 1).padStart(2, '0')} <span>/</span> ${weekday}, ${dayNumber} ${month}</p>
      <h3>${esc(phase)}</h3></div><p class="zone">Hong Kong time <b>UTC+8</b></p></header>
      ${Array.from(groups, ([start, group]) => timeBlock(start, group)).join('')}</section>`);
  }

  days.forEach(buildDay);

  function selectDay(day) {
    for (const date of days) {
      const active = date === day;
      $('day-' + date).hidden = !active;
      const tab = $('tab-' + date);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    }
  }

  function chooseTab(day) {
    selectDay(day);
    history.replaceState(null, '', '#day-' + day);
  }

  $('day-tabs').addEventListener('click', event => {
    const tab = event.target.closest('[role="tab"]');
    if (tab) chooseTab(tab.dataset.day);
  });
  $('day-tabs').addEventListener('keydown', event => {
    const index = days.indexOf(event.target.dataset.day);
    const next = {ArrowRight: (index + 1) % days.length, ArrowLeft: (index + days.length - 1) % days.length,
      Home: 0, End: days.length - 1}[event.key];
    if (next === undefined) return;
    event.preventDefault();
    chooseTab(days[next]);
    $('tab-' + days[next]).focus();
  });

  function followHash() {
    const target = $(location.hash.slice(1));
    if (!target) return;
    const dayPanel = target.closest('.day-panel');
    if (!dayPanel) return;
    selectDay(dayPanel.id.slice(4));
    const session = target.closest('.oral-session');
    if (session) session.open = true;
    target.scrollIntoView({block: 'start'});
    target.focus({preventScroll: true});
  }
  window.addEventListener('hashchange', followHash);
  if (location.hash) followHash();

  const searchPapers = [...papers].sort((a, b) =>
    a.day.localeCompare(b.day) || a.start.localeCompare(b.start) || a.session.localeCompare(b.session));
  $('paper-query').addEventListener('input', () => {
    const query = $('paper-query').value.trim().toLowerCase();
    const matches = query ? searchPapers.filter(paper =>
      [paper.title, paper.authors, paper.track, sessions.get(paper.session).title]
        .some(field => field.toLowerCase().includes(query))) : [];
    $('result-count').textContent = !query ? '' : matches.length ?
      matches.length + (matches.length === 1 ? ' presentation found' : ' presentations found') :
      'No presentations found. Try a different title, author, topic, or track.';
    $('paper-results').innerHTML = matches.map(paper =>
      `<article class="paper-result"><div><small>${shortDate(paper.day)} · ${clockRange(paper.start, paper.end)} HKT · ${trackLine(paper)}</small>
      <strong>${esc(paper.title)}</strong><p>${esc(paper.authors)}</p></div>
      <a href="#${esc(paper.id)}">View in schedule <span aria-hidden="true">↑</span></a></article>`
    ).join('');
  });
  $('paper-results').addEventListener('click', event => {
    const link = event.target.closest('a');
    if (link && link.hash === location.hash) followHash();
  });

  let expandedForPrint = [];
  window.addEventListener('beforeprint', () => {
    for (const session of document.querySelectorAll('.oral-session:not([open])')) {
      session.open = true;
      expandedForPrint.push(session);
    }
  });
  window.addEventListener('afterprint', () => {
    expandedForPrint.forEach(session => { session.open = false; });
    expandedForPrint = [];
  });
  $('print-program').addEventListener('click', () => window.print());
})();
