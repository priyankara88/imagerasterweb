import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/Main.Layout";
import Home from "../pages/Home";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainLayout}>
            <Route index Component={Home} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
