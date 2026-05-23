(function () {
  const DAY_MS = 24 * 60 * 60 * 1000;
  const STATUS_CLASSES = ['is-next', 'is-past'];

  function parseDateParts(value) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || '');
    if (!match) return null;

    return {
      year: Number(match[1]),
      month: Number(match[2]),
      day: Number(match[3]),
    };
  }

  function aoeDeadline(value) {
    const parts = parseDateParts(value);
    if (!parts) return null;

    // Anywhere on Earth is UTC-12. The listed date remains current until
    // 23:59:59 AoE, which is 11:59:59 UTC on the following day.
    return new Date(Date.UTC(parts.year, parts.month - 1, parts.day + 1, 11, 59, 59, 999));
  }

  function listedDate(value) {
    const parts = parseDateParts(value);
    if (!parts) return null;

    return new Date(Date.UTC(parts.year, parts.month - 1, parts.day));
  }

  function formatDate(date, options) {
    return new Intl.DateTimeFormat('en-GB', Object.assign({
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    }, options)).format(date);
  }

  function compactDateLabel(item) {
    if (!item) return '';
    const start = listedDate(item.startDate);
    if (!start) return item.dateText;

    const formatted = formatDate(start, { year: undefined });
    return formatted.replace(/^0/, '');
  }

  function getDeadlineLabel(item) {
    if (!item) return '';
    return item.dateText || formatDate(aoeDeadline(item.endDate));
  }

  function getRowItems(table) {
    return Array.from(table.querySelectorAll('tbody tr'))
      .map((row, index) => {
        const time = row.querySelector('time[datetime]');
        const startDate = time && time.getAttribute('datetime');
        const endDate = (row.dataset.endDate || (time && time.dataset.endDate) || startDate || '').trim();
        const deadline = aoeDeadline(endDate);
        const firstCell = row.querySelector('td:first-child');
        const lastCell = row.querySelector('td:last-child');

        return {
          row,
          time,
          index,
          startDate,
          endDate,
          deadline,
          title: firstCell ? firstCell.textContent.trim() : '',
          notes: lastCell ? lastCell.textContent.trim() : '',
          dateText: time ? time.textContent.trim() : '',
        };
      })
      .filter((item) => item.time && item.deadline);
  }

  function summarizeTitles(items) {
    const titles = items.map((item) => item.title).filter(Boolean);
    if (titles.length <= 2) return titles.join(' / ');
    return `${titles[0]} + ${titles.length - 1} more`;
  }

  function updateCountdown(targets, item, now) {
    targets.forEach((target) => {
      if (!item) {
        target.textContent = 'All dates passed · 23:59 AoE';
        return;
      }

      const diff = item.deadline.getTime() - now.getTime();
      if (diff <= 0) {
        target.textContent = 'Closed · 23:59 AoE';
        return;
      }

      const days = Math.ceil(diff / DAY_MS);
      target.textContent = `${days} ${days === 1 ? 'day' : 'days'} remaining · 23:59 AoE`;
    });
  }

  function updateDeadlinePanels(nextItems, now) {
    const primary = nextItems[0];
    const title = summarizeTitles(nextItems);
    const dateLabel = getDeadlineLabel(primary);

    document.querySelectorAll('.deadline-card').forEach((card) => {
      const heading = card.querySelector('strong');
      const dateSlot = card.querySelector('.date');
      const time = dateSlot && dateSlot.querySelector('time');

      if (heading && title) heading.textContent = title;
      if (time && primary) {
        time.setAttribute('datetime', primary.startDate);
        time.textContent = dateLabel;
      } else if (dateSlot && primary) {
        dateSlot.textContent = `${dateLabel} · 23:59 AoE`;
      }
    });

    document.querySelectorAll('.hero-meta > div').forEach((item) => {
      const label = item.querySelector('.label');
      if (!label || label.textContent.trim().toLowerCase() !== 'next deadline') return;

      const time = item.querySelector('.value time');
      const sub = item.querySelector('.sub');
      if (time && primary) {
        time.setAttribute('datetime', primary.startDate);
        time.textContent = dateLabel;
      }
      if (sub && title) sub.textContent = `${title} · 23:59 AoE`;
    });

    const headerNextWrap = document.querySelector('.header-meta > span:first-child');
    const headerNext = headerNextWrap && headerNextWrap.querySelector('span');
    const headerLabel = headerNextWrap && headerNextWrap.childNodes[0]
      ? headerNextWrap.childNodes[0].textContent.trim()
      : '';
    if (headerNext && primary && /^Next\b/i.test(headerLabel)) {
      headerNext.textContent = `${title} ${compactDateLabel(primary)}`;
    }

    updateCountdown(document.querySelectorAll('#countdown, [data-next-countdown], .deadline-card .countdown'), primary, now);
  }

  function updateDateTables() {
    const now = new Date();
    const tables = Array.from(document.querySelectorAll('.datetable'));
    let pageNextItems = [];

    tables.forEach((table) => {
      const items = getRowItems(table);
      if (!items.length) return;

      items.forEach((item) => {
        item.row.classList.remove(...STATUS_CLASSES);
        item.row.removeAttribute('aria-current');
      });

      const futureItems = items.filter((item) => item.deadline.getTime() >= now.getTime());
      const nextDeadline = futureItems.length
        ? Math.min(...futureItems.map((item) => item.deadline.getTime()))
        : null;

      items.forEach((item) => {
        if (item.deadline.getTime() < now.getTime()) {
          item.row.classList.add('is-past');
        } else if (item.deadline.getTime() === nextDeadline) {
          item.row.classList.add('is-next');
          item.row.setAttribute('aria-current', 'date');
        }
      });

      if (!pageNextItems.length && nextDeadline !== null) {
        pageNextItems = futureItems.filter((item) => item.deadline.getTime() === nextDeadline);
      }
    });

    updateDeadlinePanels(pageNextItems, now);
  }

  updateDateTables();
  setInterval(updateDateTables, 60 * 60 * 1000);
})();
