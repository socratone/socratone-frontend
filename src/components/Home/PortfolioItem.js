import React from 'react';
import convertTextToJSX from '../../helper/convertTextToJSX';
import Button from '../common/Button';
import styles from './PortfolioItem.module.scss';

const PortfolioItem = ({ isEven, subTitle, title, description, image }) => {
  const setOrder = () => {
    if (isEven) return { order: '2' };
    return {};
  };

  const setBackgroundColor = () => {
    if (isEven) return { backgroundColor: '#f3f6f9' };
    return {};
  };

  return (  
    <div className={styles.itemWrap} style={setBackgroundColor()}>
      <section className={styles.item}>
        <article className={styles.imageArea} style={setOrder()}>
          <img src={image} alt={title} className={styles.image}/>
        </article>
        <article>
          <p className={styles.subTitle}>{subTitle}</p>
          <p className={styles.title}>{title}</p>
          <div className={styles.description}>{convertTextToJSX(description)}</div>
          <Button primary>VIEW DETAIL</Button>
        </article>
      </section>
    </div>
  );
}
 
export default PortfolioItem;