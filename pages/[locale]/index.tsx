import React from 'react'; // Import React
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTAButton from '../../components/CTAButton';
import styles from '../../styles/Home.module.css'; // Beispiel für CSS-Module

// Beispiel für die Hauptseite
const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router; // Aktuelle Locale aus dem Router holen

  return (
    <div className={styles.container}>
      <Head>
        <title>EinsSein e.V. - {t('navbar.home')}</title>
        <meta name="description" content={t('welcome.message')} />
        <link rel="icon" href="/favicon.ico" /> {/* Füge ein Favicon hinzu */}
      </Head>

      <Navbar />

      <main className={styles.main}>
        {/* 1. Willkommensbotschaft */}
        <section className={styles.section}>
          <h1>{t('welcome.headline')}</h1>
          <p>{t('welcome.message')}</p>
        </section>

        {/* 2. Kurze Vorstellung */}
        <section className={styles.section}>
          <h2>{t('about.title')}</h2>
          <p>{t('about.text')}</p>
        </section>

        {/* 3. Werte */}
        <section className={styles.section}>
          <h2>{t('values.title')}</h2>
          <ul className={styles.valuesList}>
            <li>{t('values.truthfulness')}</li>
            <li>{t('values.unity')}</li>
            <li>{t('values.service')}</li>
          </ul>
        </section>

        {/* 4. Call-to-Action */}
        <section className={styles.section}>
           <CTAButton href={`/${locale}/projects`} text={t('cta.button')} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Funktion zum Laden der Übersetzungen für SSG
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || 'de'; // Fallback auf Deutsch
  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ['common'])),
      // Hier könnten weitere Props geladen werden
    },
  };
};

// Funktion zum Generieren der statischen Pfade für jede Sprache
export const getStaticPaths: GetStaticPaths = async () => {
  // Definiere die Pfade /de und /en
  const paths = ['/de', '/en'];
  return {
    paths,
    fallback: false, // Wenn ein Pfad nicht existiert -> 404
  };
};

export default Home; 