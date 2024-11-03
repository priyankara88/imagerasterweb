import { useState } from "react";
import { cardList } from "../data/data";
import ListNavigation from "../components/List.Navigation";
import RasterImageGrid from "../components/Raster.Image.Grid";

const Home = () => {
  // State to track the currently selected cell
  const [selectedCell, setSelectedCell] = useState(cardList[0]);
  // State to track the currently hovered cell (for hover highlighting)
  const [hoveredCell, setHoveredCell] = useState("");

  return (
    <div className=" w-full h-screen grid gap-1 grid-cols-[200px_calc(100%_-200px)]">
      {/* Left side: List navigation with cell names and visibility toggles */}
      <ListNavigation
        selectedCell={selectedCell}
        setSelectedCell={setSelectedCell}
        setHoveredCell={setHoveredCell}
      />
      {/* Right side: Raster grid overlayed on an image, displaying cells */}
      <RasterImageGrid
        selectedCell={selectedCell}
        setSelectedCell={setSelectedCell}
        hoveredCell={hoveredCell}
      />
    </div>
  );
};

export default Home;
