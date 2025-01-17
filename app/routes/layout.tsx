import { Outlet } from "react-router";
import { GameProvider } from "../lib/useGame";
import PageHeading from "../components/PageHeading";

const layout = () => {
  return (
    <GameProvider>
      <PageHeading />
      <Outlet />
    </GameProvider>
  );
};

export default layout;
