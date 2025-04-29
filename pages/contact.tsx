import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

// Optional: Lokale Form Komponente (wenn benötigt)
/*
import { useState } from 'react';
const ContactForm = () => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier Logik zum Senden der Formulardaten einfügen (z.B. API-Aufruf)
    console.log('Form data submitted:', formData);
    alert('Nachricht gesendet (Konsolenausgabe)!'); // Platzhalter
    setFormData({ name: '', email: '', message: '' }); // Formular zurücksetzen
  };

  return (
    <form onSubmit={handleSubmit} className={styles.localForm}>
      <div>
        <label htmlFor="name">{t('contactPage.formNameLabel')}</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">{t('contactPage.formEmailLabel')}</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="message">{t('contactPage.formMessageLabel')}</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
      </div>
      <button type="submit">{t('contactPage.formSubmitButton')}</button>
    </form>
  );
};
*/

const ContactPage: NextPage = () => {
  const { t } = useTranslation('common');

  // Hole den Microsoft Forms Embed Code (iframe)
  // Ersetze dies mit deinem tatsächlichen Embed Code
  const msFormsEmbedCode = '<iframe width="100%" height="600px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=YOUR_FORM_ID_HERE&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>';

  return (
    <div className={styles.container}>
      <Head>
        <title>{`EinsSein e.V. - ${t('contactPage.headline')}`}</title>
        <meta name="description" content={t('contactPage.intro')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <section className={styles.section} style={{ paddingBottom: '2rem' }}> 
          <h1 style={{ textAlign: 'center' }}>{t('contactPage.headline')}</h1>
          <p style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 1rem auto' }}>
            {t('contactPage.intro')}
          </p>
        </section>

        <div className={`${styles.section} ${styles.contactLayout}`}> 
          {/* Linke Spalte: Kontaktdaten */}
          <div className={styles.contactInfo}>
            <h2>{t('contactPage.contactInfoTitle')}</h2>
            <div className={styles.contactDetail}>
              <strong>{t('contactPage.emailLabel')}</strong> 
              <a href={`mailto:${t('contactPage.emailValue')}`}>{t('contactPage.emailValue')}</a>
            </div>
            {/* Optional: Telefon */}
            <div className={styles.contactDetail}>
              <strong>{t('contactPage.phoneLabel')}</strong> 
              <span>{t('contactPage.phoneValue')}</span> 
            </div>
            {/* Optional: Adresse */}
            <div className={styles.contactDetail}>
              <strong>{t('contactPage.addressLabel')}</strong> 
              <span>{t('contactPage.addressValue')}</span>
            </div>
            
            {/* Optional: Google Maps */}
            {/* 
            <div className={styles.contactMapSection} style={{marginTop: '2rem'}}>
              <h2>{t('contactPage.mapTitle')}</h2>
              <div className={styles.formEmbedContainer}>
                 (Hier Google Maps iframe einbetten) 
              </div>
            </div>
            */}
          </div>

          {/* Rechte Spalte: Kontaktformular */}
          <div className={styles.contactFormSection}>
            <h2>{t('contactPage.formTitle')}</h2>
            <p>{t('contactPage.formIntro')}</p>
            
            {/* Microsoft Forms Einbettung */}
            <div 
              className={styles.formEmbedContainer} 
              dangerouslySetInnerHTML={{ __html: msFormsEmbedCode }} 
            />
            
            {/* Alternative: Lokales Formular (auskommentiert) */}
            {/* <ContactForm /> */}
          </div>
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

export default ContactPage; 