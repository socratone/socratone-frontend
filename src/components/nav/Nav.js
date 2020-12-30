import React from 'react';
import LogoIcon from '../icon/logoIcon';
import Item from './Item';
import MenuIcon from '../icon/MenuIcon';
import styles from './Nav.module.scss';

const Nav = () => {
  return (  
    <section className={styles.navWrap} id="nav">
      <nav className={styles.nav}>
        <a className={styles.title}>
          <p className={styles.titleIcon}>
            <LogoIcon size="34" color="#f5f5f5" />
          </p>
          <p className={styles.titleText}>SCRTONE</p>
        </a>
        <ul className={styles.itemWrap}>
          <Item>PORTFOLIO</Item>
          <Item>ABOUT</Item>
          <Item>CONTACT</Item>
        </ul>
        <div className={styles.menu}>
          <MenuIcon size="20" color="#f5f5f5" />
        </div>
      </nav>
    </section>
  );
}
 
export default Nav;