import React from 'react';
import Profile from '../Home/Profile';
import styles from './Home.module.scss';

const Home = () => {
  return ( 
    <section className={styles.home}>
      <Profile />
    </section>
  );
}
 
export default Home;