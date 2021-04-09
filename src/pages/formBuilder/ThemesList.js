import styled from "styled-components";
import useFormBuilderContext from "../../hooks/useFormBuilderContext";
import { themes } from "../../services/themeService";

const ThemesList = () => {
  const { selectedTheme, selectTheme } = useFormBuilderContext();

  return (
    <Wrap>
      {themes.map((theme, index) => {
        return (
          <ThemeItem
            key={theme.id}
            onClick={() => {
              selectTheme(theme);
            }}
          >
            {selectedTheme?.id === theme.id && (
              <Label>
                <span>Selected</span>
              </Label>
            )}
            <img
              id={theme.id}
              src={`/assets/${theme.imgPath}`}
              alt={theme.id}
            />
            <Description>
              {`This form has `}
              <Highlighted>{`${theme.steps} steps`}</Highlighted>
            </Description>
          </ThemeItem>
        );
      })}
    </Wrap>
  );
};

export default ThemesList;

const ThemeItem = styled.div`
  position: relative;
  margin: 0 0 18px;
  padding: 0 15px;
  cursor: pointer;
  flex-basis: 50%;
`;

const Wrap = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 330px;
  padding: 30px 15px 7px;

  img {
    display: block;
    width: 120px;
    height: 120px;
    max-width: 100%;
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 1.25;
`;

const Highlighted = styled.span`
  color: #606dc5;
  font-weight: 600;
`;

const Label = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: -10px;
  left: 0;
  font-size: 12px;
  line-height: 20px;

  span {
    padding: 0 12px;
    background: #0122a5;
    color: #fff;
    border-radius: 4px;
  }
`;
