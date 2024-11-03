import { useState } from "react";
import { cardList } from "../data/data";
import ListNavigation from "../components/List.Navigation";
import RasterImageGrid from "../components/Raster.Image.Grid";

const Home = () => {
  const [selectedCell, setSelectedCell] = useState(cardList[0]);
  const [hoveredCell, setHoveredCell] = useState("");

  return (
    <div className=" w-full h-screen grid gap-1 grid-cols-[200px_calc(100%_-200px)]">
      {/* left side List Navigation */}
      <ListNavigation
        selectedCell={selectedCell}
        setSelectedCell={setSelectedCell}
        setHoveredCell={setHoveredCell}
      />
      {/* right side Raster grid with image*/}
      <RasterImageGrid
        selectedCell={selectedCell}
        setSelectedCell={setSelectedCell}
        hoveredCell={hoveredCell}
      />
    </div>
  );
};

export default Home;
