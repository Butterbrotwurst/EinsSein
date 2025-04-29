// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    localeDetection: false, // Deaktiviert automatische Spracherkennung, wir nutzen Pfade
  },
  // Optional: Wenn du nicht-standardmäßige locale-Pfade verwendest oder andere Anpassungen brauchst
  // localePath: path.resolve('./public/locales') // Standard ist './public/locales'
  reloadOnPrerender: process.env.NODE_ENV === 'development', // Nur im Dev-Modus neu laden
}; 