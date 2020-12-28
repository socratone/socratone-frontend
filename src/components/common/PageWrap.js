import React from 'react';
import styled from 'styled-components';

const Background = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 0;
  background-color: ${props => props.backgroundColor};
`;

const Wrap = styled.div`
  width: 100%;

  @media(min-width: 720px) {
    width: 720px;
  }
  
  @media(min-width: 960px) {
    width: 960px;
  }
`;

const PageWrap = ({ backgroundColor, children }) => {
  return (  
    <Background backgroundColor={backgroundColor}>
      <Wrap>
        {children}
      </Wrap>
    </Background>
  );
}
 
export default PageWrap;