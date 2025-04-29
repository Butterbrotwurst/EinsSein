import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import styles from '../styles/Home.module.css';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { locales, locale: currentLocale, pathname, query, asPath } = router;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref für Klick außerhalb

  const switchLang = (newLocale: string) => {
    setIsOpen(false); // Dropdown schließen
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  // Schließt Dropdown bei Klick außerhalb
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Nur rendern, wenn es Locales gibt
  if (!locales || locales.length <= 1) {
    return null;
  }

  return (
    <div className={styles.languageSwitcherContainer} ref={dropdownRef}>
      <button 
        className={styles.languageSwitcherButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {/* Zeigt aktuelle Sprache (z.B. DE) */} 
        {currentLocale?.toUpperCase()}
        {/* Kleiner Pfeil für Dropdown */}
        <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : styles.arrowDown}`}></span>
      </button>
      {isOpen && (
        <ul className={styles.languageDropdown}>
          {locales.map((locale) => {
            // Überspringt die aktuell ausgewählte Sprache
            if (locale === currentLocale) return null;
            return (
              <li key={locale}>
                <button
                  className={styles.languageDropdownItem}
                  onClick={() => switchLang(locale)}
                >
                  {/* Zeigt ausgeschriebenen Sprachnamen (z.B. English) */} 
                  {t(`languages.${locale}`)}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher; 