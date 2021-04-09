import { useEffect, useRef } from "react";
import styled from "styled-components";

import FormActionsBar from "./FormActionsBar";
import FormViewer from "./FormViewer";
import ThemesList from "./ThemesList";
import SideNav, {
  NavMenu,
  SideNavItem,
  StickyItem,
} from "../../components/SideNav";
import SiteHeader from "../../components/SiteHeader";
import useFormBuilderContext from "../../hooks/useFormBuilderContext";
import { ReactComponent as PhoneField } from "../../images/PhoneField.svg";
import { ReactComponent as ArrowRight } from "../../images/ArrowRight.svg";
import { ReactComponent as Checkbox } from "../../images/Checkbox.svg";
import { ReactComponent as Desktop } from "../../images/Desktop.svg";
import { ReactComponent as Email } from "../../images/Email.svg";
import { ReactComponent as Phone } from "../../images/Phone.svg";
import { ReactComponent as Theme } from "../../images/Theme.svg";
import { ReactComponent as Form } from "../../images/Form.svg";
import { ReactComponent as Text } from "../../images/Text.svg";
import { ReactComponent as Pad } from "../../images/Pad.svg";

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
  const { setAppWrapEl } = useFormBuilderContext();
  const appContainerRef = useRef();

  useEffect(() => {
    setAppWrapEl(appContainerRef.current);
  }, [setAppWrapEl]);

  return (
    <PageWrap ref={appContainerRef}>
      <SiteHeader />
      <FormActionsBar />
      <Wrap>
        <SideNav>
          <NavMenu>
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
          </NavMenu>
          <StickyItem>
            <NextBtn>
              <span>New Form 1/4</span>
              <div className="icon">
                <ArrowRight />
              </div>
            </NextBtn>
          </StickyItem>
        </SideNav>
        <FormViewer />
      </Wrap>
    </PageWrap>
  );
};

export default FormBuilder;

const PageWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

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

const NextBtn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #606dc5;
  color: #fff;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  padding: 0 40px;

  //TODO: again needs implementation for font icons
  .icon {
    position: absolute;
    top: 14px;
    right: 20px;
    width: 12px;

    svg {
      display: block;
    }
  }
`;
