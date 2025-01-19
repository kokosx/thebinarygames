import { Outlet } from "react-router";
import { GameProvider } from "../lib/useGame";
import PageHeading from "../components/PageHeading";

const layout = () => {
  return (
    <GameProvider>
      <div className="h-screen min-h-full">
        <PageHeading />
        <Outlet />
      </div>
    </GameProvider>
  );
};

export default layout;
