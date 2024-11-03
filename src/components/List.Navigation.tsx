import { IoEye, IoEyeOff } from "react-icons/io5";
import { cardList } from "../data/data";

// Interface for ListNavigation component props
interface IListNavavigation {
  selectedCell: string;
  setSelectedCell: React.Dispatch<React.SetStateAction<string>>;
  setHoveredCell: React.Dispatch<React.SetStateAction<string>>;
}
// ListNavigation component displays a list of cells with visibility toggles
const ListNavigation = ({
  selectedCell,
  setSelectedCell,
  setHoveredCell,
}: IListNavavigation) => {
  return (
    <div className="w-full flex flex-col justify-center p-5 pt-7 border-2 border-black ">
      {cardList.map((item) => (
        <MenuItem
          key={item}
          title={item}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
          setHoveredCell={setHoveredCell}
        />
      ))}
    </div>
  );
};

export default ListNavigation;

// Interface for MenuItem component props
interface ImenuItem {
  title: string;
  selectedCell: string;
  setSelectedCell: React.Dispatch<React.SetStateAction<string>>;
  setHoveredCell: React.Dispatch<React.SetStateAction<string>>;
}
// MenuItem component represents an individual item in the list with hover and click functionality
const MenuItem = ({
  title,
  selectedCell,
  setSelectedCell,
  setHoveredCell,
}: ImenuItem) => {
  const isSelected = title === selectedCell; // Check if this cell is currently selected
  return (
    <div
      className=" w-full flex gap-2 items-center justify-center"
      onMouseEnter={() => setHoveredCell(title)}
      onMouseLeave={() => setHoveredCell("")}
    >
      {title === selectedCell ? (
        <IoEyeOff
          className=" cursor-pointer text-2xl"
          onClick={() => setSelectedCell("")}
        />
      ) : (
        <IoEye
          className=" cursor-pointer text-2xl"
          onClick={() => setSelectedCell(title)}
        />
      )}
      <p
        className=" mr-1 text-2xl cursor-pointer"
        onClick={() => setSelectedCell(isSelected ? "" : title)}
      >
        {title}
      </p>
    </div>
  );
};
