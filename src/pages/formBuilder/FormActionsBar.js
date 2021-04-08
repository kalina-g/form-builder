import { useState } from "react";
import styled from "styled-components";

import Tabs from "../../components/Tabs";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import { ReactComponent as Undo } from "../../images/Undo.svg";
import { ReactComponent as Redo } from "../../images/Redo.svg";
import { ReactComponent as Delete } from "../../images/Delete.svg";

const FormActionsBar = () => {
  const [activeStateTab, setActiveStateTab] = useState(1);
  //just for demo
  const handleTabChange = (value) => {
    //do something with the value
    setActiveStateTab(value);
  };

  return (
    <Wrap>
      <StateTabs>
        <Tabs
          tabs={[
            { id: 1, title: "Design" },
            { id: 2, title: "Behavior" },
          ]}
          onChange={handleTabChange}
          activeTab={activeStateTab}
        ></Tabs>
        <Divider height={34} color="#E2E9EF" />
      </StateTabs>

      <PreviewActions>
        <Button text="Form 1" />
        <Button text="Success" buttonStyle="outline" />
      </PreviewActions>
      <FormActions>
        <IconButton>
          <Undo />
          <span>Undo</span>
        </IconButton>
        <IconButton>
          <Redo />
          <span>Redo</span>
        </IconButton>
        <Divider height={34} color="#E2E9EF" spacing={{ left: 7, right: 15 }} />
        <IconButton>
          <Delete />
          <span>Delete Element</span>
        </IconButton>
      </FormActions>
    </Wrap>
  );
};

export default FormActionsBar;

const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 7px 5px;
  background-color: #f4f6f8;
  font-size: 13px;
  line-height: 15px;

  span {
    margin-left: 4px;
  }

  &:not(:last-child) {
    margin-right: 7px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex: 0 0 54px;
  justify-content: space-between;
  background-color: #f4f6f8;

  & > * {
    flex-basis: 33.3333%;
  }
`;

const PreviewActions = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  background-color: #f4f6f8;

  & > div {
    margin-left: 15px;
  }
`;

const StateTabs = styled.div`
  display: flex;
  background-color: #f4f6f8;
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 24px 10px 0;
  background-color: #f4f6f8;
`;
