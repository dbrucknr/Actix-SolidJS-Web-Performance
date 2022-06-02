import { Routes, Route } from "solid-app-router";
import { Create, Main, PageNotFound } from "../pages/index";
import { Navigation } from "./base/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
