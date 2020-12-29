import React from 'react';
import styles from './PortfolioItem.module.scss';

const PortfolioItem = ({ isReverse, subTitle, title, description, image }) => {
  return (  
    <section className={styles.item}>
      <article className={styles.imageArea}>
        <img src={image} alt={title} className={styles.image}/>
      </article>
      <article className={styles.textArea}>
        <p className={styles.subTitle}>{subTitle}</p>
        <p className={styles.title}>{title}</p>
        <div className={styles.description}>
          <p>풀스택 개발이 가능한 프론트엔드 개발자 소크라톤입니다.</p>
          <p>사운드에 관심이 많습니다.</p>
        </div>

      </article>
    </section>
  );
}
 
export default PortfolioItem;