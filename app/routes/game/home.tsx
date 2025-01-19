import { useBoard } from "../../lib/useBoard";
import GameCard from "../../components/GameCard";
import CardsBoard from "../../components/CardsBoard";

const home = () => {
  const { cards, finished } = useBoard();
  return (
    <div className="w-full h-full">
      <CardsBoard />
    </div>
  );
};

export default home;
