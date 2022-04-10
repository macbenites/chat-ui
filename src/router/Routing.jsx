import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chats from "../components/Chats";
import Layout from "../layout/Layout";
import UserList from "../components/UserList";
import Groups from "../components/Groups";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="chats" element={<Chats />} />
          <Route path="chats/:id" element={<h1>Chat2</h1>} />
          <Route path="private" element={<h1>Chats Privados</h1>} />
          <Route path="groups" element={<Groups />} />
          <Route path="group/:id" element={<h1>Group</h1>} />
          <Route path="users" element={<UserList />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
