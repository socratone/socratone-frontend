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
        description="라틴어 교육 사이트입니다."
        image="https://picsum.photos/720/540" 
        />
      <PortfolioItem 
        isEven
        subTitle="도자기 작가 홈페이지"
        title="Kim Ji Young"
        description="도자기로 성물을 만드는 김지영 작가님의 홈페이지입니다."
        image="https://picsum.photos/640/480" 
      />
    </main>
  );
}
 
export default Portfolio;