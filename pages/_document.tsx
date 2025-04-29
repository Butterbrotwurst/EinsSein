import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import i18nextConfig from '../next-i18next.config';

export default function Document(props: any) { // props enthält locale
  const currentLocale = props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;

  return (
    <Html lang={currentLocale}> {/* Setzt das lang-Attribut basierend auf der Locale */}
      <Head>
        {/* Hier könnten weitere Head-Elemente hin, z.B. Fonts */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 