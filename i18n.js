(function () {
  const DEFAULT = 'it';
  const inFloors = window.location.pathname.includes('/floors/');
  const base = inFloors ? '../' : '';

  // Cache-buster: il webview di Obsidian Custom Frames (Electron) tiene in
  // cache HTTP le risposte fetch. Senza questo, le modifiche ai JSON delle
  // traduzioni non si vedono finché non si svuota la cache. Il timestamp al
  // caricamento forza il riscaricamento a ogni avvio della pagina.
  const bust = '?v=' + Date.now();

  function getLocale() {
    return localStorage.getItem('locale') || DEFAULT;
  }

  function applyUI(lang) {
    fetch(base + 'locales/' + lang + '.json' + bust)
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

  function applyRooms(lang) {
    if (lang === 'en') {
      window.ROOMS_LOCALE = {};
      return;
    }
    fetch(base + 'locales/rooms.' + lang + '.json' + bust)
      .then(r => r.json())
      .then(data => { window.ROOMS_LOCALE = data; })
      .catch(() => { window.ROOMS_LOCALE = {}; });
  }

  window.i18nSet = function (lang) {
    localStorage.setItem('locale', lang);
    applyUI(lang);
    applyRooms(lang);
  };

  document.addEventListener('DOMContentLoaded', function () {
    const lang = getLocale();
    applyUI(lang);
    applyRooms(lang);
  });
})();
