import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Navicon } from "@styled-icons/evil/Navicon";
import { Close } from "@styled-icons/evil/Close";

export interface BurgerMenuProps {
  options?: BurgerMenuOption[];
  width?: number;
}

export interface BurgerMenuOption {
  label?: string;
  to?: string;
  subOptions?: BurgerMenuSubOptions[];
}

export interface BurgerMenuSubOptions {
  label?: string;
  to: string;
}

export function BurgerMenu(props: BurgerMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState<number | undefined>(
    undefined
  );
  if (props.width) {
    console.log("width:", props.width / 1000);
  }
  return (
    <BurgerMenuWrapper
      className={`menu-wrapper ${menuOpen ? "open" : "closed"}`}
      {...props}
    >
      <BurgerMenuButton
        className={`menu-button ${menuOpen ? "open" : "closed"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <Close /> : <Navicon />}
      </BurgerMenuButton>
      <Menu {...props}>
        <MenuItems className={`menu ${menuOpen ? "open" : "closed"}`}>
          {props.options &&
            props.options.map((option, key) => (
              <>
                {!option.subOptions ? (
                  <>
                    {option.to && (
                      <DirectOption to={option.to} key={key}>
                        {option.label}
                      </DirectOption>
                    )}
                  </>
                ) : (
                  <>
                    <Option
                      key={key}
                      onClick={() => {
                        setSelectedSubMenu(key);
                        if (selectedSubMenu === key && !subMenuOpen) {
                          setSubMenuOpen(!subMenuOpen);
                        }
                      }}
                    >
                      {option.label}
                    </Option>

                    <SubOptionItems
                      {...props}
                      style={{
                        height: `${
                          subMenuOpen && selectedSubMenu === key
                            ? `calc(${option.subOptions.length}px * 26)`
                            : "0px"
                        }`,
                      }}
                    >
                      {option.subOptions.map((subOption, subkey) => (
                        <SubOption key={subkey} to={subOption.to}>
                          {subOption.label}
                        </SubOption>
                      ))}
                    </SubOptionItems>
                  </>
                )}
              </>
            ))}
        </MenuItems>
      </Menu>
    </BurgerMenuWrapper>
  );
}

const BurgerMenuWrapper = styled.div<BurgerMenuProps>`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row-reverse;
  z-index: 100;
  transition: all ${(props) => (props.width ? `${props.width / 1200}` : "0.2")}s
    ease-in-out;
  &.open {
    left: 0;
  }
  &.closed {
    left: ${(props) => (props.width ? `-${props.width}px` : "-200px")};
  }
`;

const BurgerMenuButton = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  position: relative;
  background-color: transparent;
  border-radius: 50%;
  z-index: 150;
  top: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &.open {
    left: -45px;
    box-shadow: 1px 1px 4px 1px inset rgba(0, 0, 0, 0);
    &:hover {
      box-shadow: 1px 1px 4px 1px inset rgba(0, 0, 0, 0.3);
      background-color: rgba(255, 255, 255, 0.3);
    }
    &:active {
      box-shadow: 1px 1px 4px 1px inset rgba(0, 0, 0, 0.4);
      background-color: rgba(255, 255, 255, 0);
    }
  }
  &.closed {
    left: 5px;
  }
`;

const Menu = styled.div<BurgerMenuProps>`
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.6),
    rgba(228, 245, 255, 0.808)
  );
  backdrop-filter: blur(30px);
  width: ${(props) => (props.width ? `${props.width}px` : "200px")};
`;

const MenuItems = styled.div`
  height: 100%;
  transition: all 0.45s ease-in-out;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  &.open {
    transform: translateY(0px);
    box-shadow: 2px 4px 38px 3px rgba(0, 0, 0, 0.2);
  }
  &.closed {
    transform: translateY(-100px);
  }
`;

const Option = styled.button`
  border: unset;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  font-size: 22px;
  padding: 0.4rem;
  color: rgba(0, 17, 27, 0.836);
  &:hover {
    color: rgb(0, 17, 27);
    transform: scale(1.1);
  }
`;

const DirectOption = styled(NavLink)`
  text-decoration: none;
  border: unset;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  font-size: 22px;
  padding: 0.4rem;
  color: rgba(0, 17, 27, 0.836);
  &:hover {
    color: rgb(0, 17, 27);
    transform: scale(1.1);
  }
`;

const SubOptionItems = styled.div<BurgerMenuProps>`
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  margin: 0 1rem 1rem;
  border-radius: 5px;
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0.2rem 1rem;
  justify-content: space-around;
  align-items: flex-start;
`;

const SubOption = styled(NavLink)`
  text-decoration: none;
  border: unset;
  height: 20px;
  font-size: 18px;

  color: rgba(0, 0, 0, 0.7);
  &:hover {
    color: rgba(0, 0, 0, 1);
    font-weight: 600;
  }
  &:focus {
    color: rgba(0, 0, 0, 1);
    font-weight: 600;
  }
  cursor: pointer;
  background-color: transparent;
`;
