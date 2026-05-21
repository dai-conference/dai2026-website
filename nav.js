(function () {
  const topbar = document.querySelector('.topbar');
  const nav = document.getElementById('siteNav');
  const toggle = document.querySelector('.nav-toggle');
  if (!topbar || !nav || !toggle) return;

  const label = toggle.querySelector('[data-nav-label]');
  const desktop = window.matchMedia('(min-width: 861px)');

  function setOpen(open) {
    topbar.classList.toggle('is-nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (label) label.textContent = open ? 'Close' : 'Menu';
  }

  toggle.addEventListener('click', () => {
    setOpen(!topbar.classList.contains('is-nav-open'));
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  const onDesktop = (event) => {
    if (event.matches) setOpen(false);
  };
  if (desktop.addEventListener) desktop.addEventListener('change', onDesktop);
  else desktop.addListener(onDesktop);
})();
