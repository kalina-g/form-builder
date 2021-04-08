import styled from "styled-components";

import Divider from "./Divider";
import IconButton from "./IconButton";
import { ReactComponent as Exit } from "../images/Exit.svg";
import { ReactComponent as Pen } from "../images/Pen.svg";
import { ReactComponent as DropDownCaret } from "../images/ArrowDown.svg";

const SiteHeader = () => {
  return (
    <Wrap>
      <LogoWrap>App Logo</LogoWrap>
      <PageName>
        <Divider height={34} color="#E2E9EF" spacing={{ right: 51 }} />
        <IconButton icon={<Pen />} text="Form 1" space={10} />
      </PageName>
      <PageActions>
        {/* TODO: separate into a component */}
        <PageStatusDropDown options={[{ name: "Draft", value: "draft" }]}>
          <DropDownIcon></DropDownIcon>
          <SelectedOptionValue>Draft</SelectedOptionValue>
          <div className="icon">
            <DropDownCaret />
          </div>
        </PageStatusDropDown>
        <Divider
          height={34}
          color="#E2E9EF"
          spacing={{ left: 30, right: 30 }}
        />
        <IconButton icon={<Exit />} text="Exit" space={10} />
      </PageActions>
    </Wrap>
  );
};

export default SiteHeader;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  width: 186px;
`;
const PageActions = styled.div`
  display: flex;
  align-items: center;
`;

const PageName = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const PageStatusDropDown = styled.div`
  //not using this because the font I use is different from design  padding: 8px 17px 7px 10px;

  display: flex;
  align-items: center;
  height: 30px;
  border: 1px solid #212b35;
  padding: 2px 17px 2px 10px;
  border-radius: 4px;
  font-size: 13px;
  line-height: 15px;

  //whould normally use svg font
  & > .icon {
    margin-left: 13px;
    height: 6px;

    svg {
      display: block;
    }
  }
`;

const DropDownIcon = styled.span`
  margin-right: 3px;
  width: 10px;
  height: 10px;
  border: 1px solid #606dc5;
  border-radius: 50%;
`;

const SelectedOptionValue = styled.div`
  padding: 0 2px 4px 2px;
  line-height: 1;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: stretch;
  height: 64px;
  padding: 0 20px;
`;
