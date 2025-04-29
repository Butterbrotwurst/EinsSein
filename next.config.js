const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  // Wenn du planst, `next export` zu nutzen (für rein statische Hoster ohne Next.js-Server):
  // output: 'export', // Beachte: Dies hat Einschränkungen mit i18n-Routing. Vercel braucht das i.d.R. nicht.
};

module.exports = nextConfig; 