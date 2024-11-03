import { cardList } from "../data/data";
import img from "../assets/imgraster.jpeg";

interface IRasterImageGrid {
  selectedCell: string;
  hoveredCell?: string;
  setSelectedCell?: React.Dispatch<React.SetStateAction<string>>;
}
const RasterImageGrid = ({ selectedCell, hoveredCell }: IRasterImageGrid) => {
  return (
    <div className=" w-full h-screen">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className=" w-full h-full grid grid-cols-3"
      >
        {cardList.map((list) => (
          <div
            className={`w-full flex items-center justify-center border border-black ${
              list === selectedCell ? "bg-white" : "bg-transparent"
            } ${
              list === hoveredCell
                ? " border-4 border-rose-700"
                : "border-black"
            }`}
            key={list}
          >
            {list}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RasterImageGrid;
