import { render, screen } from "@testing-library/react";
import { cardList } from "../data/data";
import "@testing-library/jest-dom";
import RasterImageGrid from "./Raster.Image.Grid";

describe("RasterImageGrid Component", () => {
  it("renders the component and displays all cells", () => {
    render(<RasterImageGrid selectedCell="" hoveredCell="" />);
    cardList.forEach((cell) => {
      expect(screen.getByText(cell)).toBeInTheDocument();
    });
  });

  it("applies hover border color when a cell is hovered over", () => {
    const hoveredCell = cardList[1];
    render(<RasterImageGrid selectedCell="" hoveredCell={hoveredCell} />);

    // The hovered cell should have a rose border
    const hoveredElement = screen.getByText(hoveredCell);
    expect(hoveredElement).toHaveClass("border-rose-700");
  });
});
