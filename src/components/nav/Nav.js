import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenuButton } from '../../store/reducers/nav';
import LogoIcon from '../icon/logoIcon';
import MenuIcon from '../icon/MenuIcon';
import styles from './Nav.module.scss';

const Item = ({ onClick, children }) => {
  return (  
    <li onClick={onClick} className={styles.item}>
      {children}
    </li>
  );
}

const Nav = () => {
  const dispatch = useDispatch();
  const handleMenuClick = () => dispatch(toggleMenuButton());

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
          <Item>ABOUT</Item>
          <Item>CONTACT</Item>
        </ul>
        <div className={styles.menu} onClick={handleMenuClick}>
          <MenuIcon size="20" color="#f5f5f5" />
        </div>
      </nav>
    </section>
  );
}
 
export default Nav;