import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import LanguageSwitcher from './LanguageSwitcher';
import styles from '../styles/Home.module.css'; // Beispielstyles

const Footer = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          {/* Füge hier Links zu Impressum/Datenschutz hinzu */}
          <Link href={`/${locale}/imprint`} locale={false}>{t('footer.imprint')}</Link>
          <Link href={`/${locale}/privacy`} locale={false}>{t('footer.privacy')}</Link>
        </div>
        <div className={styles.socialMedia}>
          {t('footer.socialMedia')}: {/* Füge hier Social Media Icons/Links hinzu */}
          <span> FB </span> <span> IG </span> <span> TW </span>
        </div>
        <LanguageSwitcher />
      </div>
    </footer>
  );
};

export default Footer; 