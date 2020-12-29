import React from 'react';
import styles from './SpecialtyItem.module.scss';

const SpecialtyItem = ({ title, description, icon}) => {
  return (  
    <article className={styles.item}>
      <p className={styles.icon}>{icon}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
 
export default SpecialtyItem;