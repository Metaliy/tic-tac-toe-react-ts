import { Routes, Route } from "react-router";
import { GamePage } from "./game";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<GamePage />} />
    </Routes>
  );
};