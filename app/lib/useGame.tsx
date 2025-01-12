import { createContext, useContext, useState, type ReactElement } from "react";

enum NumberTypes {
  BINARY = 2,
  DECIMAL = 10,
  HEXADECIMAL = 16,
  OCTAL = 8,
}

type GameCard = {
  id: number;
  sideOne: string;
  sideTwo: string;
};

export class Game {
  time: number | null;
  cardPairs: number;
  maxDecimalNumber: number;
  cards: GameCard[];

  constructor() {
    this.time = null;
    this.cardPairs = 3;
    this.maxDecimalNumber = 128;
    this.cards = [];
  }

  createGame(
    sideOneType: NumberTypes,
    sideTwoType: NumberTypes,
    time: number,
    cardPairs: number,
    maxDecimalNumber: number
  ) {
    this.time = time;
    this.cardPairs = cardPairs;
    this.maxDecimalNumber = maxDecimalNumber;

    //Generate random numbers:
    const randomNumbers = [];
    for (let i = 0; i < this.cardPairs; i++) {
      randomNumbers.push(Math.floor(Math.random() * this.maxDecimalNumber + 1));
    }
    this.cards = randomNumbers.map((n, i) => {
      return {
        id: i,
        sideOne: n.toString(sideOneType),
        sideTwo: n.toString(sideTwoType),
      };
    });
  }

  isGameCreated(): boolean {
    return this.cards.length > 0;
  }
}
const gameContext = createContext<Game>(new Game());

export const useGame = () => {
  return useContext(gameContext);
};

export const GameProvider = ({ children }: { children: ReactElement }) => {
  return (
    <gameContext.Provider value={new Game()}>{children}</gameContext.Provider>
  );
};
