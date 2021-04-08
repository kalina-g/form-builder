import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  width: 235px;
  background-color: #f4f6f8;
`;

const Tab = styled.div`
  flex-grow: 1;
  padding: 19px 5px;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;

  &.active {
    background-color: #606dc5;
    color: #fff;
    border-radius: 4px;

    &:first-child {
      border-radius: 0 4px 4px 0;
    }

    &:last-child {
      border-radius: 4px 0 0 4px;
    }
  }
`;

const Tabs = ({ tabs, onChange, activeTab }) => {
  return (
    <Wrap>
      {tabs.map(({ id, title }, index) => (
        <Tab
          key={id}
          onClick={() => {
            onChange && onChange(id);
          }}
          className={activeTab === id ? "active" : ""}
        >{`${index + 1}.${title}`}</Tab>
      ))}
    </Wrap>
  );
};

export default Tabs;
