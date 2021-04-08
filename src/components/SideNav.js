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

export const StickyItem = ({ children }) => <StickyWrap>{children}</StickyWrap>;

export const NavMenu = ({ children }) => <MenuWrap>{children}</MenuWrap>;

const SideNav = ({ children }) => <Wrap>{children}</Wrap>;

export default SideNav;

const Wrap = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 234px;
`;

const MenuWrap = styled.div`
  flex-grow: 1;
`;

const StickyWrap = styled.div`
  height: 40px;
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
