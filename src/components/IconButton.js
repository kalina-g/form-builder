import styled from "styled-components";

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 7px 5px;
  font-size: 13px;
  line-height: 15px;

  span {
    margin-left: ${(props) => props.iconSpace || 4}px;
  }

  &:not(:last-child) {
    margin-right: 7px;
  }
`;

const IconButton = ({ icon, text, space }) => (
  <Button iconSpace={space}>
    {icon}
    <span>{text}</span>
  </Button>
);

export default IconButton;
