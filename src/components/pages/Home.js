import React from 'react';
import Portfolio from '../Home/Portfolio';
import Profile from '../Home/Profile';
import styles from './Home.module.scss';

const Home = () => {
  return ( 
    <section className={styles.home}>
      <Profile />
      <Portfolio />
    </section>
  );
}
 
export default Home;