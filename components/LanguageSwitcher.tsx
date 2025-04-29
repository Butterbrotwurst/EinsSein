import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import styles from '../styles/Home.module.css';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { locales, locale: currentLocale, pathname, query } = router;

  const switchLang = (newLocale: string) => {
    router.push({ pathname, query }, router.asPath, { locale: newLocale });
  };

  return (
    <div className={styles.languageSwitcher}>
      <span>{t('languageSwitcher.switchLocale')}: </span>
      {locales?.map((locale) => {
        if (locale === currentLocale) return null; // Aktuelle Sprache nicht anzeigen
        return (
          <button
            key={locale}
            onClick={() => switchLang(locale)}
            className={styles.langButton}
          >
            {locale.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher; 