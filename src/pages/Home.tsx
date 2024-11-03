import { useState } from "react";
import { cardList } from "../data/data";
import ListNavigation from "../components/List.Navigation";

const Home = () => {
  const [selectedCell, setSelectedCell] = useState(cardList[0]);

  return (
    <div>
      <ListNavigation
        selectedCell={selectedCell}
        setSelectedCell={setSelectedCell}
      />
    </div>
  );
};

export default Home;
