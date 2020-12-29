import React from 'react';
import Button from '../common/Button';
import SpecialtyItem from './SpecialtyItem';
import DesignIcon from '../icon/DesignIcon';
import styles from './Profile.module.scss';

const Profile = () => {
  return (  
    <header className={styles.profile}>
      <div className={styles.topWrap}>
        <article className={styles.textArea}>
          <p className={styles.subTitle}>Introduction</p>
          <p className={styles.title}>Frontend Developer</p>
          <div className={styles.description}>
            <p>풀스택 개발이 가능한 프론트엔드 개발자 소크라톤입니다.</p>
            <p>사운드에 관심이 많습니다.</p>
          </div>
          <Button className={styles.firstButton}>VIEW DETAIL</Button>
          <Button primary className={styles.secondButton}>VIEW PORTFOLIO</Button>
        </article>
        <article className={styles.imageArea}>
          <img 
            src="https://picsum.photos/800/600" 
            alt="header" 
            className={styles.image}
          />
        </article>
      </div>
      <div className={styles.bottomBumper}>
        <section className={styles.itemWrap}>
          <SpecialtyItem 
            icon={<DesignIcon size={80} color="#f5f5f5" />} 
            title="디자인에 대한 감각" 
            description="일반 개발자보다 디자인 감각이 좋습니다." 
          />
          <SpecialtyItem 
            icon={<DesignIcon size={80} color="#f5f5f5" />} 
            title="음악과 음향 지식" 
            description="간과하기 쉬운 사운드를 잘 다룰 수 있습니다." 
          />
          <SpecialtyItem 
            icon={<DesignIcon size={80} color="#f5f5f5" />} 
            title="디자인에 대한 감각" 
            description="일반 개발자보다 디자인 감각이 좋습니다." 
          />
        </section>
      </div>
    </header>
  );
}
 
export default Profile;