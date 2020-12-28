import React from 'react';
import PageWrap from '../common/PageWrap';
import styled from 'styled-components';

const Item = styled.header`
  color: white;
  height: 300px;
`;

const HomeProfile = () => {
  return (  
    <PageWrap backgroundColor="#7250d5">
      <Item>
        homeprofile
      </Item>
    </PageWrap>
  );
}
 
export default HomeProfile;