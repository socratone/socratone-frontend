import React from 'react';
import Button from '../common/Button';
import styles from './WorksItem.module.scss';

const WorksItem = ({ title, description, imageKey }) => {
  const handleClick = () => {

  };

  return (  
    <article className={styles.item}>
      <div className={styles.imageArea}>
        <img src={imageKey} alt={title} className={styles.image} />
      </div>
      <div className={styles.textArea}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.buttons}>
          <Button primary width="80px" right="8px" onClick={handleClick}>
            자세히
          </Button>
          <Button primary width="80px" onClick={handleClick}>
            사이트
          </Button>
        </p>
      </div>
    </article>
  );
}
 
export default WorksItem;