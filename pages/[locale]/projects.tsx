import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/Home.module.css'; // Wiederverwende Styles oder erstelle neue

const Projects: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <Head>
        <title>EinsSein e.V. - {t('navbar.projects')}</title>
        <meta name="description" content={t('projectsPage.title')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1>{t('projectsPage.title')}</h1>
        <p>Hier werden bald die Projekte vorgestellt.</p>
         {/* Füge hier den Inhalt der Projektseite hinzu */}
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || 'de';
  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ['common'])),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = ['de', 'en'];
  const paths = locales.map((locale) => ({
    params: { locale }, // Hier muss nur die locale übergeben werden
  }));
  return {
    paths,
    fallback: false,
  };
};

export default Projects; 