import styled from "styled-components";
import useFormBuilderContext from "../../hooks/useFormBuilderContext";

const FormViewer = () => {
  const { responsiveMode, selectedTheme } = useFormBuilderContext();

  return (
    <Wrap>
      <ViewPort className={responsiveMode}>
        {selectedTheme && (
          <img
            id={selectedTheme.id}
            src={`/assets/${selectedTheme.imgPath}`}
            alt={selectedTheme.id}
          />
        )}
      </ViewPort>
    </Wrap>
  );
};

export default FormViewer;

const Wrap = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: #e7e5e5;
`;

const ViewPort = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px 0;
  background: transparent
    radial-gradient(closest-side at 50% 50%, #b5b5b5 0%, #939393 100%) 0% 0%
    no-repeat padding-box;

  &.tablet {
    width: 842px;
  }

  &.phone {
    width: 464px;
  }

  & > * {
    width: 444px;
    max-width: 100%;
  }
`;
