import styled from "styled-components";

const Menu = ({ children }) => {
  return <MenuContainer>{children}</MenuContainer>;
};

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  background-color: var(--text-color);
  border-radius: 1.2rem;
  padding: 1rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
`;

export default Menu;
