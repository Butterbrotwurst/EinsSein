import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'; // Oder ein spezifisches Project Stylesheet

interface ProjectCardProps {
  title: string;
  description: string;
  targetAudience: string;
  learnMoreLink: string;
  registerLink: string;
  learnMoreText: string;
  registerText: string;
  targetAudienceLabel: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title,
  description,
  targetAudience,
  learnMoreLink,
  registerLink,
  learnMoreText,
  registerText,
  targetAudienceLabel
}) => {
  return (
    <div className={styles.projectCard}> 
      <h3>{title}</h3>
      <p>{description}</p>
      <p className={styles.targetAudience}><strong>{targetAudienceLabel}</strong> {targetAudience}</p>
      <div className={styles.cardButtons}>
        <Link href={learnMoreLink} locale={false} className={styles.cardButtonSecondary}>
          {learnMoreText}
        </Link>
        {/* Externer Link, öffnet in neuem Tab */} 
        <a href={registerLink} target="_blank" rel="noopener noreferrer" className={styles.cardButtonPrimary}>
          {registerText}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard; 