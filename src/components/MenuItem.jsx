import { LinkTo } from "../styles/reusable";
import styled from "styled-components";

const MenuItem = ({ icon, title, link }) => {
  return (
    <LinkTo to={link}>
      <MenuContainer>
        {icon}
        <p>{title}</p>
      </MenuContainer>
    </LinkTo>
  );
};

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1rem;
  cursor: pointer;
  border-radius: 1.2rem;
  svg {
    font-size: 1.5rem;
    fill: var(--main-color);
    opacity: 0.7;
  }
  :hover {
    color: var(--text-color);
    background-color: var(--main-color);
    svg {
      fill: var(--background-color);
    }
  }
`;

export default MenuItem;
