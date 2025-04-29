import React from 'react'; // Import React
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css'; // Globale Styles importieren

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// App mit i18n-Unterstützung wrappen
export default appWithTranslation(MyApp); 