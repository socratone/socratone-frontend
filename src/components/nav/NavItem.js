import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleMenuButton } from '../../store/reducers/nav';
import styled from 'styled-components';

const Item = styled.a`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: black;
  margin-bottom: 8px;
  cursor: pointer;
`;

const NavItem = ({ to, children }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(toggleMenuButton());
    history.push(to);
  };

  return (  
    <Item onClick={handleClick}>
      {children}
    </Item>
  );
}
 
export default NavItem;