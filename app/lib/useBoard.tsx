import { useEffect, useState } from "react";
import { useGame } from "./useGame";

export const useBoard = () => {
  const game = useGame();
  const [revealed, setRevealed] = useState([] as string[]);
  const [guessed, setGuessed] = useState([] as string[]);
  const revealCard = (id: string) => {
    setRevealed((prev) => [...prev, id]);
  };

  const isRevealed = (id: string) => {
    return revealed.includes(id);
  };

  useEffect(() => {
    if (revealed.length == 2) {
      if (revealed[0][0] == revealed[1][0]) {
        setGuessed((prev) => [...prev, revealed[0], revealed[1]]);
      }
      setTimeout(() => {
        setRevealed(() => []);
      }, 800);
    }
  }, [revealed, guessed]);

  const isGuessed = (id: string) => {
    return guessed.includes(id);
  };

  return {
    cards: game.cards.map((card) => {
      return {
        ...card,
        isRevealed: isRevealed(card.id),
        isGuessed: isGuessed(card.id),
        revealCard: () => revealCard(card.id),
        type: card.id[1] == `a` ? game.sideOneType : game.sideTwoType,
      };
    }),
    finished: game.cards.length == guessed.length,
  };
};
