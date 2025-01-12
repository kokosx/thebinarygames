import { Outlet } from "react-router";
import { GameProvider } from "../lib/useGame";

const layout = () => {
  return (
    <GameProvider>
      <Outlet />
    </GameProvider>
  );
};

export default layout;
