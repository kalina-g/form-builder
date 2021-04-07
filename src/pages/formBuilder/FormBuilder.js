import styled from "styled-components";

import FormActionsBar from "./FormActionsBar";
import FormViewer from "./FormViewer";
import ThemesList from "./ThemesList";
import SideNav, { SideNavItem } from "../../components/SideNav";
import useFormBuilderContext from "../../hooks/useFormBuilderContext";
import { ReactComponent as Desktop } from "../../images/Desktop.svg";
import { ReactComponent as Pad } from "../../images/Pad.svg";
import { ReactComponent as Phone } from "../../images/Phone.svg";
import { ReactComponent as Theme } from "../../images/Theme.svg";
import { ReactComponent as Form } from "../../images/Form.svg";
import { ReactComponent as Text } from "../../images/Text.svg";
import { ReactComponent as PhoneField } from "../../images/PhoneField.svg";
import { ReactComponent as Email } from "../../images/Email.svg";
import { ReactComponent as Checkbox } from "../../images/Checkbox.svg";

const ResponsiveModeToggle = () => {
  const { toggleResponsiveMode, responsiveMode } = useFormBuilderContext();

  const modes = [
    {
      type: "desktop",
      icon: () => <Desktop />,
    },
    {
      type: "tablet",
      icon: () => <Pad />,
    },
    {
      type: "phone",
      icon: () => <Phone />,
    },
  ];

  return (
    <>
      {modes.map(({ type, icon }) => (
        <Btn
          key={type}
          onClick={() => {
            toggleResponsiveMode(type);
          }}
          className={responsiveMode === type ? "selected" : ""}
        >
          {icon && icon()}
        </Btn>
      ))}
    </>
  );
};

const FormBuilder = () => {
  return (
    <>
      <FormActionsBar />
      <Wrap>
        <SideNav>
          <CustomContent>
            <ResponsiveModeToggle />
          </CustomContent>
          <SideNavItem item={"Theme"} icon={<Theme />}>
            <ThemesList />
          </SideNavItem>
          <SideNavItem item={"Form"} icon={<Form />} />
          <SideNavItem item={"Text"} icon={<Text />} />
          <SideNavItem item={"Phone field"} icon={<PhoneField />} />
          <SideNavItem item={"Email field"} icon={<Email />} />
          <SideNavItem item={"Nav field"} icon={<Checkbox />} />
        </SideNav>
        <FormViewer />
      </Wrap>
    </>
  );
};

export default FormBuilder;

const Wrap = styled.div`
  display: flex;
  flex-grow: 1;
`;

const CustomContent = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #ccc;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;
