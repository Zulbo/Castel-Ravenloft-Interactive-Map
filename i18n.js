(function () {
  const DEFAULT = 'it';
  const inFloors = window.location.pathname.includes('/floors/');
  const base = inFloors ? '../' : '';

  function getLocale() {
    return localStorage.getItem('locale') || DEFAULT;
  }

  function apply(lang) {
    fetch(base + 'locales/' + lang + '.json')
      .then(r => r.json())
      .then(t => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          if (t[el.dataset.i18n] !== undefined)
            el.textContent = t[el.dataset.i18n];
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
          if (t[el.dataset.i18nPh] !== undefined)
            el.placeholder = t[el.dataset.i18nPh];
        });
        document.querySelectorAll('.lang-btn').forEach(btn => {
          btn.classList.toggle('lang-active', btn.dataset.lang === lang);
        });
      });
  }

  window.i18nSet = function (lang) {
    localStorage.setItem('locale', lang);
    apply(lang);
  };

  document.addEventListener('DOMContentLoaded', () => apply(getLocale()));
})();
