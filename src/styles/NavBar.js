import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  z-index: 1;
`;

export const NavLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;
