/* Inline SVGs so they inherit currentColor from the host page (theme + accent).
   Replaces <div data-svg-inline="path/to.svg"> with the actual SVG content. */
(async function () {
  const slots = document.querySelectorAll('[data-svg-inline]');
  await Promise.all(Array.from(slots).map(async (el) => {
    const src = el.getAttribute('data-svg-inline');
    try {
      const r = await fetch(src);
      const txt = await r.text();
      // strip XML declaration
      el.innerHTML = txt.replace(/<\?xml[^>]*\?>/, '').trim();
      const svg = el.querySelector('svg');
      if (svg) {
        svg.removeAttribute('width');
        svg.removeAttribute('height');
        svg.setAttribute('preserveAspectRatio', svg.getAttribute('preserveAspectRatio') || 'xMidYMid meet');
        // Let the parent control sizing; default to full-width, height by aspect ratio
        const mode = el.dataset.svgFit || 'width';
        if (mode === 'fill') {
          svg.style.width = '100%';
          svg.style.height = '100%';
        } else {
          svg.style.width = '100%';
          svg.style.height = 'auto';
        }
        svg.style.display = 'block';
      }
    } catch (e) {
      console.warn('svg-inline failed:', src, e);
    }
  }));
})();
