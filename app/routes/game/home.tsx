import { useBoard } from "../../lib/useBoard";
import GameCard from "../../components/GameCard";

const home = () => {
  const { cards, finished } = useBoard();
  return (
    <div>
      {cards.map((card) => (
        <GameCard
          value={card.value}
          isRevealed={card.isRevealed}
          isFinished={card.isGuessed}
          revealCard={card.revealCard}
          type={card.type}
        />
      ))}
    </div>
  );
};

export default home;
