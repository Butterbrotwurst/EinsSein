import React from 'react'; // Import React
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import LanguageSwitcher from './LanguageSwitcher'; // Import LanguageSwitcher
import styles from '../styles/Home.module.css'; // Beispielstyles

const Navbar = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router; // Aktuelle Locale

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' }, // Zielpfade müssen noch erstellt werden
    { key: 'projects', href: '/projects' },
    { key: 'team', href: '/team' },
    { key: 'getInvolved', href: '/get-involved' },
    { key: 'contact', href: '/contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>EinsSein</div>
      <div className={styles.navRight}> {/* Neuer Container für Nav + Switcher */}
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.key}>
              {/* Fügt das locale-Präfix hinzu */}
              <Link href={`/${locale}${item.href}`} locale={false}>
                {t(`navbar.${item.key}`)}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSwitcher /> {/* Hier einfügen */}
      </div>
    </nav>
  );
};

export default Navbar; 