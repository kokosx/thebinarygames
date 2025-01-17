import type { NumberTypes } from "../lib/useGame";

type Props = {
  revealCard: () => void;
  isRevealed: boolean;
  value: string;
  isFinished: boolean;
  type: NumberTypes;
};

const GameCard = ({
  isRevealed,
  revealCard,
  value,
  isFinished,
  type,
}: Props) => {
  const handleClick = () => {
    if (isFinished) return;
    revealCard();
  };

  return (
    <div className={`card-container w-[100px] h-[140px] perspective-1000 `}>
      <div
        onClick={handleClick}
        className={`card-flipper relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isRevealed || isFinished ? "rotate-y-180" : ""
        }`}
      >
        <div className="card-front absolute w-full h-full backface-hidden bg-orange-600 rounded-lg flex items-center justify-center hover:text-[120%]">
          ?
        </div>
        <div
          className={`card-back absolute w-full h-full backface-hidden bg-orange-600 rounded-lg flex items-center justify-center rotate-y-180 ${
            isFinished && "bg-green-500"
          }`}
        >
          <span>
            <sub>{type}</sub> {value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
