import Menu from "../common/Menu";
import MenuItem from "../components/MenuItem";
import { BsFillXDiamondFill } from "react-icons/bs";

const groups = [
  {
    id: 1,
    name: "Juegos",
  },
  {
    id: 2,
    name: "Deportes",
  },
  {
    id: 3,
    name: "Cultura",
  },
  {
    id: 4,
    name: "Tecnología",
  },
];

const Groups = () => {
  return (
    <Menu>
      {groups.map((group) => (
        <MenuItem
          key={group.id}
          title={group.name}
          link={`/group/${group.id}`}
          icon={<BsFillXDiamondFill />}
        />
      ))}
    </Menu>
  );
};

export default Groups;
