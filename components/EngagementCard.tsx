import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'; // Oder ein spezifisches Stylesheet

interface EngagementCardProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string; // Optionaler zweiter Button
  secondaryButtonLink?: string;
  isExternalLink?: boolean; // Für Spenden/Kontaktformular
}

const EngagementCard: React.FC<EngagementCardProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  isExternalLink = false
}) => {
  return (
    <div className={styles.engagementCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.cardButtons}>
        {/* Primärer Button */} 
        {isExternalLink ? (
          <a href={primaryButtonLink} target="_blank" rel="noopener noreferrer" className={styles.cardButtonPrimary}>
            {primaryButtonText}
          </a>
        ) : (
          <Link href={primaryButtonLink} locale={false} className={styles.cardButtonPrimary}>
            {primaryButtonText}
          </Link>
        )}
        {/* Optionaler Sekundärer Button */} 
        {secondaryButtonText && secondaryButtonLink && (
          <Link href={secondaryButtonLink} locale={false} className={styles.cardButtonSecondary}>
             {secondaryButtonText}
           </Link>
        )}
      </div>
    </div>
  );
};

export default EngagementCard; 