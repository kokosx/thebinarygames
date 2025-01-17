import GameCard from "./GameCard";
import { useBoard } from "../lib/useBoard";

const CardsBoard = () => {
  const { cards, finished } = useBoard();

  return (
    <div className="flex flex-wrap">
      {cards.map((card) => (
        <GameCard
          key={card.id}
          value={card.value}
          isRevealed={card.isRevealed}
          isFinished={card.isGuessed}
          revealCard={card.revealCard}
          type={card.type}
        />
      ))}
      {finished && <h1>You won!</h1>}
    </div>
  );
};

export default CardsBoard;
