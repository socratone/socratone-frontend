import React from 'react';
import PageWrap from '../common/PageWrap';
import Text from '../common/Text';
import styled from 'styled-components';

const Item = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${props => props.height};
`;

const HomeProfile = ({ height }) => {
  return (  
    <PageWrap backgroundColor="#7250d5">
      <Item height={height}>
        <Text size="20px" color="white">
          Frontend Developer
        </Text>
        <Text size="48px" color="white">
          SOCRATONE
        </Text>
      </Item>
    </PageWrap>
  );
}
 
export default HomeProfile;