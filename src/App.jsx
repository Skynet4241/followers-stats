import { Route, Routes } from "react-router-dom";

import "./index.css";
import { MainLayouts } from "./components/layouts/MainLayouts";
import { Home } from "./pages/Home";
import { Tweets } from "./pages/Tweets";
import { Error } from "./pages/Error/Error";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
