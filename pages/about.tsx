import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image'; // Import Image component

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'; // Reuse styles or create specific ones

const AboutPage: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <Head>
        <title>{`EinsSein e.V. - ${t('aboutPage.title')}`}</title>
        <meta name="description" content={t('aboutPage.missionText1')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {/* Überschrift */}
        <section className={styles.section}>
          <h1>{t('aboutPage.headline')}</h1>
        </section>

        {/* Mission/Vision */}
        <section className={styles.section}>
          <h2>{t('aboutPage.missionTitle')}</h2>
          <p>{t('aboutPage.missionText1')}</p>
          <p>{t('aboutPage.missionText2')}</p>
        </section>

        {/* Was wir tun */}
        <section className={styles.section}>
          <h2>{t('aboutPage.whatWeDoTitle')}</h2>
          <p>{t('aboutPage.whatWeDoText1')}</p>
          <p>{t('aboutPage.whatWeDoText2')}</p>
        </section>

        {/* Platzhalter für Bild */}
        <section className={styles.section}>
          {/* Hier kannst du ein Bild einfügen */}
          {/* Beispiel mit next/image (erfordert Bilddatei in public/images) */}
           <div style={{ maxWidth: '600px', margin: '2rem auto' }}> {/* Style für Container */}
            {/* Ersetze 'placeholder.jpg' mit deinem Bildpfad */}
             {/* <Image
               src="/images/placeholder.jpg" 
               alt={t('aboutPage.imageAlt')}
               width={600} 
               height={400}
               layout="responsive" 
               style={{ borderRadius: '12px' }} // Style direkt am Image
             /> */}
             <div style={{ height: '300px', background: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', color: 'var(--text-medium)' }}>
               {t('aboutPage.imageAlt')}
             </div>
           </div>
        </section>

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

export default AboutPage; 