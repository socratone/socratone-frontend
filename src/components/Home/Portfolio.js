import React from 'react';
import PortfolioItem from './PortfolioItem';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (  
    <main className={styles.portfolio}>
      <div className={styles.topBumper} />
      <PortfolioItem 
        subTitle="라틴어 교육 웹"
        title="Gabriel Latin"
        image="https://picsum.photos/720/540" 
      />
    </main>
  );
}
 
export default Portfolio;