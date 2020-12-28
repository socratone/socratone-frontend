import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled.a`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  color: white;
  margin-bottom: 8px;
  cursor: pointer;
`;

const NavItem = ({ to, children }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(to);
  };

  return (  
    <Item onClick={handleClick}>
      {children}
    </Item>
  );
}
 
export default NavItem;