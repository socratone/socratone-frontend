import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuButton } from '../../store/reducers/nav';
import MenuIcon from '../icon/MenuIcon';
import XIcon from '../icon/XIcon';
import { menuButtonSize } from '../common/layout';
import styled from 'styled-components';

const Button = styled.button`
  z-index: 12;
  width: ${menuButtonSize}px;
  height: ${menuButtonSize}px;
  border-radius: ${menuButtonSize / 2}px;
  cursor: pointer;
`;

const MenuButton = ({ size, color }) => {
  const isMenu = useSelector(state => state.ui.nav.isMenu);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleMenuButton());
  };

  return (  
    <Button onClick={handleClick}>
      {!isMenu && <MenuIcon size={size} color={color} />}
      {isMenu && <XIcon size={size} color={color} />}
    </Button>
  );
}
 
export default MenuButton;