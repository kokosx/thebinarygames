import type { NumberTypes } from "../lib/useGame";

type Props = {
  showCard: () => void;
  isShown: boolean;
  value: string;
  isGuessed: boolean;
  type: NumberTypes;
};

const GameCard = ({ showCard, isShown, value, isGuessed, type }: Props) => {
  const handleClick = () => {
    console.log(isGuessed);
    if (isGuessed) return;

    showCard();
  };

  return (
    <div className={`card-container w-[100px] h-[140px] perspective-1000 `}>
      <div
        onClick={handleClick}
        className={`card-flipper relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isShown || isGuessed ? "rotate-y-180" : ""
        }`}
      >
        <div className="card-front absolute w-full h-full backface-hidden bg-orange-600 rounded-lg flex items-center justify-center hover:text-[120%]">
          ?
        </div>
        <div
          className={`card-back delay-[250]  absolute w-full h-full backface-hidden  rounded-lg flex items-center justify-center rotate-y-180 ${
            isGuessed ? "bg-green-500" : "bg-orange-600"
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
