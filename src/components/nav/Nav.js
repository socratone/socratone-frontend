import React from 'react';
import LogoIcon from '../icon/logoIcon';
import Item from './Item';
import styles from './Nav.module.scss';

const Nav = () => {
  return (  
    <nav className={styles.nav}>
      <a className={styles.title}>
        <p className={styles.titleIcon}>
          <LogoIcon size="34" color="#f5f5f5" />
        </p>
        <p className={styles.titleText}>SCRTONE</p>
      </a>
      <Item>
      </Item>
    </nav>
  );
}
 
export default Nav;