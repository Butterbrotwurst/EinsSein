import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EngagementCard from '../components/EngagementCard'; // Import EngagementCard
import styles from '../styles/Home.module.css';

const GetInvolvedPage: NextPage = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  // Platzhalter-Links (anpassen!)
  const contactLink = `/${locale}/contact`; // Link zur internen Kontaktseite
  const learnMoreProjectsLink = `/${locale}/projects`;
  // Beispiel für externen Spendenlink
  const donateExternalLink = 'https://www.paypal.com/donate/?hosted_button_id=YOUR_PAYPAL_ID_HERE'; 

  const engagementOptions = [
    {
      id: 'volunteer',
      primaryLink: contactLink, // Interner Link
      secondaryLink: '#' // Platzhalter, könnte zu Detailseite führen
    },
    {
      id: 'support',
      primaryLink: contactLink,
      secondaryLink: learnMoreProjectsLink // Link zur Projektseite
    },
    {
      id: 'donate',
      primaryLink: donateExternalLink, // Externer Link
      isExternal: true
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>{`EinsSein e.V. - ${t('getInvolvedPage.headline')}`}</title>
        <meta name="description" content={t('getInvolvedPage.intro')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {/* Überschrift und Intro */}
        <section className={styles.section} style={{ textAlign: 'center' }}>
          <h1>{t('getInvolvedPage.headline')}</h1>
          <p style={{ maxWidth: '750px', margin: '0 auto 1rem auto' }}>
            {t('getInvolvedPage.intro')}
          </p>
        </section>

        {/* Engagement-Grid */}
        <div className={styles.engagementGrid}>
          {engagementOptions.map((option) => (
            <EngagementCard 
              key={option.id}
              title={t(`getInvolvedPage.${option.id}Title`)}
              description={t(`getInvolvedPage.${option.id}Desc`)}
              primaryButtonText={
                option.id === 'donate' 
                  ? t('getInvolvedPage.donateNow') 
                  : t('getInvolvedPage.contactUs')
              }
              primaryButtonLink={option.primaryLink}
              secondaryButtonText={
                option.id === 'donate' ? undefined : t('getInvolvedPage.learnMore')
              }
              secondaryButtonLink={option.secondaryLink}
              isExternalLink={option.isExternal}
            />
          ))}
        </div>
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

export default GetInvolvedPage; 