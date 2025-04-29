import React from 'react';
import { GetStaticProps, NextPage } from 'next'; // GetStaticPaths entfernt
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '../components/Navbar'; // Pfad korrigiert
import Footer from '../components/Footer'; // Pfad korrigiert
import CTAButton from '../components/CTAButton'; // Pfad korrigiert
import styles from '../styles/Home.module.css'; // Pfad korrigiert

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  return (
    <div className={styles.container}>
      <Head>
        <title>EinsSein e.V. - {t('navbar.home')}</title>
        <meta name="description" content={t('welcome.message')} />
        <link rel="icon" href="/favicon.ico" />
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
  const currentLocale = locale || 'de';
  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ['common'])),
    },
  };
};

// getStaticPaths wurde entfernt

export default Home; 