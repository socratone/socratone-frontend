import React from 'react';
import styles from './BlogItem.module.scss';

const BlogItem = ({ title, description, image }) => {
  return (  
    <article className={styles.item}>
      <div>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.button}>VIEW</p>
      </div>
    </article>
  );
}
 
export default BlogItem;