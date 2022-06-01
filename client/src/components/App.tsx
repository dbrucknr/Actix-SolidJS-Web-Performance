import { Routes, Route } from "solid-app-router";
import { Create } from "../pages/Create";
import { Index } from "../pages/Index";
import { Navigation } from "./base/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
};

export default App;
