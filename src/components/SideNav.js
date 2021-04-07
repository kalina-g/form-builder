import { useState } from "react";
import styled from "styled-components";
import cn from "classnames";

export const SideNavItem = ({ item, icon, children, onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ItemWrap
      onMouseEnter={() => {
        setIsOpen(!isOpen);
        onOpen && onOpen();
      }}
      onMouseLeave={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className={cn("nav-item", { selected: isOpen })}>
        {icon}
        {item}
      </div>
      {isOpen && <Content>{children}</Content>}
    </ItemWrap>
  );
};

const SideNav = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default SideNav;

const Wrap = styled.div`
  background: #fff;
  width: 234px;
`;

const ItemWrap = styled.div`
  position: relative;

  .nav-item {
    display: flex;
    align-items: center;
    padding: 13px 30px;
    cursor: pointer;

    &.selected {
      color: #606dc5;
      background: #f7f7f7;

      &:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 4px;
        background: #606dc5;
        border-radius: 0 4px 4px 0;
      }
    }

    svg {
      margin-right: 21px;
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  background: #f7f7f7;

  cursor: default;
`;
