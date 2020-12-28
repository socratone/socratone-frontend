import React from 'react';
import Text from '../common/Text';
import Button from '../common/Button';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 56px 0;
  background-color: #511c97;
`;

const HomeProfile = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/profile');
  };

  return (  
    <Section className="profile">
      <Text size="20px" color="white">
        Frontend Developer
      </Text>
      <Text size="48px" color="white">
        SOCRATONE
      </Text>
      <Button width="104px" top="8px" onClick={handleClick}>자세히 보기</Button>
    </Section>
  );
}
 
export default HomeProfile;