import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuButton } from '../../store/reducers/nav';
import MenuIcon from '../icon/MenuIcon';
import XIcon from '../icon/XIcon';
import styles from './MenuButton.module.scss';

const MenuButton = () => {
  const dispatch = useDispatch();
  const isMenu = useSelector(state => state.ui.nav.isMenu);

  const handleClick = () => {
    dispatch(toggleMenuButton());
  };

  return (  
    <button onClick={handleClick} className={styles.button}>
      {!isMenu && <MenuIcon size="20" color="white" />}
      {isMenu && <XIcon size="20" color="white" />}
    </button>
  );
}
 
export default MenuButton;