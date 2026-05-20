/* DAI 2026 — Tweaks panel
   Theme + accent + hero variant. Persists via the host edit-mode protocol. */

const DAI_DEFAULTS = {
  theme:  document.documentElement.dataset.theme  || 'light',
  accent: document.documentElement.dataset.accent || 'crimson',
  heroVariant: 'editorial',
  showSkyline: true,
  showContour: true,
};

function DAITweaks() {
  const [t, setTweak] = useTweaks(DAI_DEFAULTS);

  // Apply tweaks to DOM
  React.useEffect(() => {
    document.documentElement.dataset.theme  = t.theme;
    document.documentElement.dataset.accent = t.accent;

    // hero skyline / contour visibility
    document.querySelectorAll('.hero-skyline').forEach(el => {
      el.style.display = t.showSkyline ? '' : 'none';
    });
    document.querySelectorAll('.hero-contour, .page-header-contour').forEach(el => {
      el.style.display = t.showContour ? '' : 'none';
    });

    // hero variant
    document.body.dataset.heroVariant = t.heroVariant;

    // sync the inline theme button label if present
    const lbl = document.querySelector('[data-theme-label]');
    if (lbl) lbl.textContent = t.theme === 'dark' ? 'Dark' : 'Light';
  }, [t.theme, t.accent, t.showSkyline, t.showContour, t.heroVariant]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Theme" />
      <TweakRadio
        label="Mode"
        value={t.theme}
        options={['light', 'dark']}
        onChange={(v) => setTweak('theme', v)}
      />

      <TweakSection label="Accent" />
      <TweakColor
        label="Hue"
        value={
          t.accent === 'crimson'  ? '#a01b1b'
          : t.accent === 'burgundy' ? '#6b1e2d'
          : '#1f3a5f'
        }
        options={['#a01b1b', '#6b1e2d', '#1f3a5f']}
        onChange={(v) => {
          const map = { '#a01b1b': 'crimson', '#6b1e2d': 'burgundy', '#1f3a5f': 'ink' };
          setTweak('accent', map[v] || 'crimson');
        }}
      />

      <TweakSection label="Hong Kong elements" />
      <TweakToggle
        label="Skyline silhouette"
        value={t.showSkyline}
        onChange={(v) => setTweak('showSkyline', v)}
      />
      <TweakToggle
        label="Topographic contour"
        value={t.showContour}
        onChange={(v) => setTweak('showContour', v)}
      />
    </TweaksPanel>
  );
}

// Mount
const __twkRoot = document.createElement('div');
document.body.appendChild(__twkRoot);
ReactDOM.createRoot(__twkRoot).render(<DAITweaks />);
