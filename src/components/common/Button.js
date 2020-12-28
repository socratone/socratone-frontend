import styled, { css } from 'styled-components';

const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: black;
  background: linear-gradient(180deg,#f2cf00 0,#f2b200 100%);
  width: ${props => props.width || '64px'};
  padding: 14px 0;
  border-radius: 80px;
  margin-top: ${props => props.top};
  margin-right: ${props => props.right};
  margin-bottom: ${props => props.bottom};
  cursor: pointer;

  ${props => props.primary && css`
    background: linear-gradient(180deg,#ff668b 0,#f43a67 100%);
    color: white;
  `}

  ${props => props.secondary && css`
    background: linear-gradient(180deg,#f2cf00 0,#f2b200 100%);
    color: black;
  `}
`;

export default Button;