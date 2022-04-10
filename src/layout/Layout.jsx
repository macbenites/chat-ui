import styled from "styled-components";
import Header from "../common/Header";
import { Outlet } from "react-router-dom";
import Menu from "../common/Menu";
import MenuItem from "../components/MenuItem";
import * as BsIcon from "react-icons/bs";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Menu>
          <MenuItem
            title="Mis chats"
            icon={<BsIcon.BsFillInboxFill />}
            link={"chats"}
          />
          <MenuItem
            title="Chats privados"
            icon={<BsIcon.BsFillChatDotsFill />}
            link={"private"}
          />
          <MenuItem
            title="Chats grupales"
            icon={<BsIcon.BsFillPeopleFill />}
            link={"groups"}
          />
          <MenuItem
            title="Lista de usuarios"
            icon={<BsIcon.BsFillPersonLinesFill />}
            link={"users"}
          />
        </Menu>
        <Outlet />
      </Content>
    </Container>
  );
};

export const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-gap: 1.2rem;
  padding: 2rem 0;
`;

export default Layout;
