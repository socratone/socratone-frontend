import React from 'react';
import styles from './Item.module.scss';

const Item = ({ children }) => {
  return (  
    <li className={styles.item}>
      {children}
    </li>
  );
}
 
export default Item;