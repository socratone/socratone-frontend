import React from 'react';
import styles from './Item.module.scss';

const Item = ({ onClick, children }) => {
  return (  
    <li onClick={onClick} className={styles.item}>
      {children}
    </li>
  );
}
 
export default Item;