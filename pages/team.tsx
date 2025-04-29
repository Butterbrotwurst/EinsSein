import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamMemberCard from '../components/TeamMemberCard';
import styles from '../styles/Home.module.css';

// Beispiel-Teammitglieder-Daten
const teamMembers = [
  { id: 'member1', imageUrl: '/images/placeholder-profile.png' },
  { id: 'member2', imageUrl: '/images/placeholder-profile.png' },
  { id: 'member3', imageUrl: '/images/placeholder-profile.png' },
  { id: 'member4', imageUrl: '/images/placeholder-profile.png' }
];

const TeamPage: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <Head>
        <title>{`EinsSein e.V. - ${t('teamPage.headline')}`}</title>
        <meta name="description" content={t('teamPage.intro')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <section className={styles.section} style={{ textAlign: 'center' }}>
          <h1>{t('teamPage.headline')}</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto 1rem auto' }}>
            {t('teamPage.intro')}
          </p>
        </section>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => {
            const name = t(`teamPage.${member.id}_name`);
            return (
              <TeamMemberCard
                key={member.id}
                name={name}
                role={t(`teamPage.${member.id}_role`)}
                quote={t(`teamPage.${member.id}_quote`)}
                imageUrl={member.imageUrl}
                altText={t('teamPage.imageAlt', { name: name })}
              />
            );
          })}
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

export default TeamPage; 