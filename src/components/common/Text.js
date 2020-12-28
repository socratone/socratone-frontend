import styled from 'styled-components';
  
const Text = styled.p`
  font-size: ${props => props.size};
  color: ${props => props.color || 'black'};
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.bottom};
`;

export default Text;