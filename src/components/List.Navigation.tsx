import { IoEye, IoEyeOff } from "react-icons/io5";
import { cardList } from "../data/data";

interface IListNavavigation {
  selectedCell: string;
  setSelectedCell: React.Dispatch<React.SetStateAction<string>>;
}

const ListNavigation = ({
  selectedCell,
  setSelectedCell,
}: IListNavavigation) => {
  return (
    <div className=" p-5 pt-7">
      {cardList.map((item) => (
        <MenuItem
          key={item}
          title={item}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
        />
      ))}
    </div>
  );
};

export default ListNavigation;

interface ImenuItem {
  title: string;
  selectedCell: string;
  setSelectedCell: React.Dispatch<React.SetStateAction<string>>;
}
const MenuItem = ({ title, selectedCell, setSelectedCell }: ImenuItem) => {
  return (
    <div className=" w-full flex items-center ">
      <p className=" mr-1">{title}</p>
      {title === selectedCell ? (
        <IoEyeOff
          className=" cursor-pointer"
          onClick={() => setSelectedCell("")}
        />
      ) : (
        <IoEye
          className=" cursor-pointer"
          onClick={() => setSelectedCell(title)}
        />
      )}
    </div>
  );
};
