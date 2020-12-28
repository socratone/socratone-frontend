import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavItem.module.scss';

const NavItem = ({ to, children }) => {
  return (  
    <Link to={to} className={styles.item}>
      {children}
    </Link>
  );
}
 
export default NavItem;