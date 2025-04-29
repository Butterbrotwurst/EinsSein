import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css'; // Oder ein spezifisches Team Stylesheet

interface TeamMemberCardProps {
  name: string;
  role: string;
  quote: string;
  imageUrl: string; // URL zum Platzhalterbild
  altText: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ 
  name,
  role,
  quote,
  imageUrl,
  altText
}) => {
  return (
    <div className={styles.teamMemberCard}>
      <div className={styles.teamMemberImageContainer}>
        <Image 
          src={imageUrl} 
          alt={altText}
          width={150} // Feste Größe für konsistente Darstellung
          height={150}
          className={styles.teamMemberImage} 
        />
      </div>
      <h4 className={styles.teamMemberName}>{name}</h4>
      <p className={styles.teamMemberRole}>{role}</p>
      <p className={styles.teamMemberQuote}>\"{quote}\"</p>
    </div>
  );
};

export default TeamMemberCard; 