import React from 'react';
import PortfolioItem from './PortfolioItem';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (  
    <main className={styles.portfolio}>
      <div className={styles.topBumper} />
      <p className={styles.title}>PORTFOLIO</p>
      <PortfolioItem 
        subTitle="Education Web"
        title="Gabriel Latin"
        description="라틴어 교육 사이트입니다."
        image="https://picsum.photos/720/540" 
      />
      <PortfolioItem 
        isEven
        subTitle="eCommerce Web"
        title="Kim Ji Young"
        description="도자기로 성물을 만드는 김지영 작가님의 홈페이지입니다."
        image="https://picsum.photos/640/480" 
      />
      <PortfolioItem 
        subTitle="Electron App"
        title="Youtube Music Player"
        description="유튜브 음악 영상을 재생리스트에 넣고 음악을 재생하는 플레이어 앱입니다."
        image="https://picsum.photos/560/420" 
      />
      <PortfolioItem 
        isEven
        subTitle="Electron App"
        title="Finger Organist"
        description="리듬에 맞춰 손가락을 터치해 가톨릭 성가 반주를 해주는 앱입니다."
        image="https://picsum.photos/480/360" 
      />
    </main>
  );
}
 
export default Portfolio;