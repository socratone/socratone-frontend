import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenuButton } from '../../store/reducers/nav';
import styles from './SideNav.module.scss';

const Item = ({ onClick, children }) => {
  return (  
    <li className={styles.item}>
      <a onClick={onClick} >
        {children}
      </a>
    </li>
  );
}

const SideNav = () => {
  const dispatch = useDispatch();
  const handleBackgroundClick = () => dispatch(toggleMenuButton());

  return (  
    <div className={styles.navWrap}>
      <div className={styles.background} onClick={handleBackgroundClick}/>
      <nav className={styles.nav}>
        <Item onClick={handleBackgroundClick}>HOME</Item>
        <Item onClick={handleBackgroundClick}>ABOUT</Item>
        <Item onClick={handleBackgroundClick}>CONTACT</Item>
      </nav>
    </div>
  );
}
 
export default SideNav;