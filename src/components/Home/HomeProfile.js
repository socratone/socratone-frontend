import React from 'react';
import Text from '../common/Text';
import styled from 'styled-components';
import Button from '../common/Button';
import { useHistory } from 'react-router-dom';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  background: ${props => props.background};
`;

const HomeProfile = ({ background }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/profile');
  };

  return (  
    <Section background={background}>
      <Text size="20px" color="white">
        Frontend Developer
      </Text>
      <Text size="48px" color="white">
        SOCRATONE
      </Text>
      <Button width="96px" top="8px" onClick={handleClick}>자세히 보기</Button>
    </Section>
  );
}
 
export default HomeProfile;