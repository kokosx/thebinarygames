import React, { useContext } from "react";
import { useGame } from "../lib/useGame";

const PageHeading = () => {
  const { isGameCreated } = useGame();

  return (
    <header>
      <h1>{isGameCreated() ? "Your game" : "Create a new game"}</h1>
    </header>
  );
};

export default PageHeading;
