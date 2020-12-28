import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0;
  background-color: ${props => props.backgroundColor};
`;

const Section = styled.section`
  width: 100%;

  @media(min-width: 720px) {
    width: 720px;
  }
  
  @media(min-width: 960px) {
    width: 960px;
  }
`;

const Cage = ({ backgroundColor, children }) => {
  return (  
    <Background backgroundColor={backgroundColor}>
      <Section>
        {children}
      </Section>
    </Background>
  );
}
 
export default Cage;