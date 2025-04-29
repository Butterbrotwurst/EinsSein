import React from 'react';
import { GetStaticProps, NextPage } from 'next'; // GetStaticPaths entfernt
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Navbar from '../components/Navbar'; // Pfad korrigiert
import Footer from '../components/Footer'; // Pfad korrigiert
import ProjectCard from '../components/ProjectCard'; // Import ProjectCard
import styles from '../styles/Home.module.css'; // Pfad korrigiert

// Beispiel-Projektdaten
const exampleProjects = [
  {
    id: 'project1',
    targetAudienceKey: 'projectsPageContent.targetAudienceKids',
    // Ersetze durch echten MS Forms Link
    registerLink: 'https://forms.office.com/Pages/ResponsePage.aspx?id=YOUR_FORM_ID_HERE' 
  },
  {
    id: 'project2',
    targetAudienceKey: 'projectsPageContent.targetAudienceTeens',
    registerLink: 'https://forms.office.com/Pages/ResponsePage.aspx?id=YOUR_FORM_ID_HERE'
  },
  {
    id: 'project3',
    targetAudienceKey: 'projectsPageContent.targetAudienceTeens',
    registerLink: 'https://forms.office.com/Pages/ResponsePage.aspx?id=YOUR_FORM_ID_HERE'
  }
];

const ProjectsPage: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <Head>
        <title>{`EinsSein e.V. - ${t('projectsPageContent.headline')}`}</title>
        <meta name="description" content={t('projectsPageContent.intro')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {/* Überschrift und Intro */}
        <section className={styles.section} style={{ textAlign: 'center' }}>
          <h1>{t('projectsPageContent.headline')}</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto 1rem auto' }}>
            {t('projectsPageContent.intro')}
          </p>
        </section>

        {/* Projekt-Grid */}
        <div className={styles.projectsGrid}>
          {exampleProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={t(`projectsPageContent.${project.id}_title`)}
              description={t(`projectsPageContent.${project.id}_desc`)}
              targetAudienceLabel={t('projectsPageContent.targetAudienceLabel')}
              targetAudience={t(project.targetAudienceKey)}
              // Platzhalter für interne Links, falls Detailseiten erstellt werden
              learnMoreLink="#" 
              registerLink={project.registerLink}
              learnMoreText={t('projectsPageContent.learnMore')}
              registerText={t('projectsPageContent.registerNow')}
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

// getStaticPaths wurde entfernt

export default ProjectsPage; 