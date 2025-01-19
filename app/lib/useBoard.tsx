import { useEffect, useState } from "react";
import { useGame } from "./useGame";

export const useBoard = () => {
  const game = useGame();
  const [revealed, setRevealed] = useState([] as string[]);
  const [guessed, setGuessed] = useState([] as string[]);
  const [shown, setShown] = useState([] as string[]);

  const revealCard = (id: string) => {
    setShown((prev) => [...prev, id]);
    setRevealed((prev) => [...prev, id]);
  };

  const isRevealed = (id: string) => {
    return shown.includes(id);
  };

  useEffect(() => {
    if (revealed.length == 2) {
      if (revealed[0][0] === revealed[1][0]) {
        setGuessed((prev) => [...prev, revealed[0], revealed[1]]);
      }
      setRevealed(() => []);
    }
  }, [revealed, guessed, setGuessed, setRevealed]);

  useEffect(() => {
    if (shown.length === 2) {
      setTimeout(() => {
        setShown(() => []);
      }, 1000);
    }
  }, [shown]);

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
