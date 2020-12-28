import React from 'react';
import { useSelector } from 'react-redux';
import { menuButtonSize, menuButtonMargin, navSize } from '../common/layout';
import NavItem from './NavItem';
import MenuButton from './MenuButton';
import styles from './Nav.module.scss';

const increasedSize = navSize - menuButtonSize;

const Nav = () => {
  const isMenu = useSelector(state => state.ui.nav.isMenu);

  const setCircleSize = () => {
    if (isMenu) return { 
      width: navSize + 'px', 
      height: navSize + 'px',
      top: - increasedSize / 2 + 'px',
      right: - increasedSize / 2 + 'px',
      borderRadius: navSize / 2 + 'px'
    };
    return {};
  };

  return (  
    <nav className={styles.nav}>
      <div className={styles.circle} style={setCircleSize()} />
      {isMenu && <ul className={styles.itemWrap}>
        <NavItem to="/">
          홈
        </NavItem>
        <NavItem to="/">
          포트폴리오
        </NavItem>
        <NavItem to="/">
          블로그
        </NavItem>
        <NavItem to="/">
          프로필
        </NavItem>
      </ul>}
      <MenuButton />
    </nav>
  );
}
 
export default Nav;