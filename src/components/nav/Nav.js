import React from 'react';
import { useSelector } from 'react-redux';
import { menuButtonSize, menuButtonMargin, navSize } from '../common/layout';
import NavItem from './NavItem';
import MenuButton from './MenuButton';
import styled from 'styled-components';

const Wrap = styled.nav`
  position: fixed;
  top: ${menuButtonMargin}px;
  right: ${menuButtonMargin}px;
  z-index: 11;
  display: flex;
`;

const Circle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  width: ${menuButtonSize}px;
  height: ${menuButtonSize}px;
  border-radius: ${menuButtonSize / 2}px;
  background: linear-gradient(180deg,#f2cf00 0,#f2b200 100%);
  transition: top 0.3s, right 0.3s, width 0.3s, height 0.3s, border-radius 0.3s;
`;

const ItemWrap = styled.ul`
  position: relative;
  top: 48px;
  right: 32px;
  z-index: 12;
  display: flex;
  flex-direction: column;
`;

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
    <Wrap>
      <Circle style={setCircleSize()} />
      {isMenu && <ItemWrap>
        <NavItem to="/">
          홈
        </NavItem>
        <NavItem to="/profile">
          프로필
        </NavItem>
        <NavItem to="/works">
          포트폴리오
        </NavItem>
        <NavItem to="/blog">
          블로그
        </NavItem>
      </ItemWrap>}
      <MenuButton size="16px" color="black" />
    </Wrap>
  );
}
 
export default Nav;