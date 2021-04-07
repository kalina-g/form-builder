import styled from "styled-components";

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  padding: 9px 10px 8px;
  background: #606dc5;
  color: #fff;
  font-size: 13px;
  line-height: 15px;
  border-radius: 4px;
  border: 1px solid #606dc5;

  &.outline {
    background: transparent;
    color: #212b35;
    border-color: #212b35;
  }
`;

const Button = ({ buttonStyle, text }) => (
  <Btn className={buttonStyle}>{text}</Btn>
);

export default Button;
