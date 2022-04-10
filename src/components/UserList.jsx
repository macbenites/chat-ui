import Menu from "../common/Menu";
import MenuItem from "../components/MenuItem";
import { BsFillPersonFill } from "react-icons/bs";

const chats = [
  {
    id: 1,
    name: "Marlon",
  },
  {
    id: 2,
    name: "Marco",
  },
  {
    id: 3,
    name: "Juan",
  },
  {
    id: 4,
    name: "Bruno",
  },
];

const UserList = () => {
  return (
    <Menu>
      {chats.map((chat) => (
        <MenuItem
          key={chat.id}
          title={chat.name}
          link={`/chats/${chat.id}`}
          icon={<BsFillPersonFill />}
        />
      ))}
    </Menu>
  );
};

export default UserList;
