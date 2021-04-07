import styled from "styled-components";

const Line = styled.div`
  border-left: 1px solid ${(props) => props.elColor};
  width: 0;
  height: ${(props) => props.elHeight}px;
  align-self: center;
  margin-left: ${(props) => props.mL}px;
  margin-right: ${(props) => props.mR}px;
`;

const Divider = ({ height, spacing, color }) => {
  return (
    <Line
      elHeight={height}
      mL={spacing?.left || 0}
      mR={spacing?.right || 0}
      elColor={color}
    />
  );
};

export default Divider;
