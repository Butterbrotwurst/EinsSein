import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

interface CTAButtonProps {
  href: string;
  text: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ href, text }) => {
  return (
    <Link href={href} locale={false} className={styles.ctaButton}>
        {text}
    </Link>
  );
};

export default CTAButton; 