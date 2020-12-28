import styled from 'styled-components';
  
const Text = styled.p`
  font-size: ${props => props.size};
  color: ${props => props.color || 'black'};
`;

export default Text;