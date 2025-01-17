import { createContext, useContext, type ReactNode } from "react";

export enum NumberTypes {
  BINARY = 2,
  DECIMAL = 10,
  HEXADECIMAL = 16,
  OCTAL = 8,
}

export type Card = {
  id: string;
  value: string;
};

export class Game {
  time: number | null = null;
  cardPairs: number = 4;
  maxDecimalNumber: number = 130;
  cards: Card[] = [];
  sideOneType: NumberTypes = NumberTypes.DECIMAL;
  sideTwoType: NumberTypes = NumberTypes.BINARY;

  constructor() {
    this.createGame(2, 10, 4, 130);
  }

  createGame = (
    sideOneType: NumberTypes,
    sideTwoType: NumberTypes,
    cardPairs: number,
    maxDecimalNumber: number
  ) => {
    this.cardPairs = cardPairs;
    this.maxDecimalNumber = maxDecimalNumber;
    this.sideOneType = sideOneType;
    this.sideTwoType = sideTwoType;

    //Generate random numbers:
    const randomNumbers = [];
    for (let i = 0; i < this.cardPairs; i++) {
      randomNumbers.push(Math.floor(Math.random() * this.maxDecimalNumber + 1));
    }
    randomNumbers.map((n, i) => {
      this.cards.push({
        id: `${i}a`,
        value: n.toString(sideOneType),
      });
    });
    randomNumbers.map((n, i) => {
      this.cards.push({
        id: `${i}b`,
        value: n.toString(sideTwoType),
      });
    });
    // Shuffle the cards array
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  };

  isGameCreated = () => {
    return this.cards.length > 0;
  };
}
const gameContext = createContext<Game>(new Game());

export const GameProvider = ({ children }: { children: ReactNode }) => {
  return (
    <gameContext.Provider value={new Game()}>{children}</gameContext.Provider>
  );
};

export const useGame = () => useContext(gameContext);
