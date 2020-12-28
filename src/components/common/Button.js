import styled from 'styled-components';

const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: black;
  background: linear-gradient(180deg,#f2cf00 0,#f2b200 100%);
  width: ${props => props.width || '64px'};
  padding: 10px 0;
  border-radius: 80px;
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.bottom};
  cursor: pointer;
`;

export default Button;