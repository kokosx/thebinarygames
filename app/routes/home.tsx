import { useState, type FormEvent } from "react";
import CardsBoard from "../components/CardsBoard";
import { NumberTypes, useGame } from "../lib/useGame";
import type { Route } from "./+types/home";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The binary games" },
    { name: "description", content: "Play the binary games!" },
  ];
}

export default function Home() {
  const [sideOneType, setSideOneType] = useState<NumberTypes>(
    NumberTypes.DECIMAL
  );
  const [sideTwoType, setSideTwoType] = useState<NumberTypes>(
    NumberTypes.BINARY
  );
  const [cardPairs, setCardPairs] = useState(4);
  const [maxDecimalNumber, setMaxDecimalNumber] = useState(130);

  const { createGame } = useGame();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createGame(sideOneType, sideTwoType, cardPairs, maxDecimalNumber);
    navigate("/game");
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sideonetype">Side one numbers</label>
        <select
          onChange={(e) => setSideOneType(Number(e.target.value))}
          value={sideOneType}
          name="sideonetype"
          id="sideonetype"
        >
          <option value="2">Binary</option>
          <option value="10">Decimal</option>
          <option value="8">Octal</option>
          <option value="16">Hexadecimal</option>
        </select>
        <br />
        <label htmlFor="sidetwotype">Side two numbers</label>
        <select
          value={sideTwoType}
          onChange={(e) => setSideTwoType(Number(e.target.value))}
          name="sidetwotype"
          id="sidetwotype"
        >
          <option value="2">Binary</option>
          <option value="10">Decimal</option>
          <option value="8">Octal</option>
          <option value="16">Hexadecimal</option>
        </select>
        <br />
        <label htmlFor="pairs">How many card pairs?</label>
        <input
          value={cardPairs}
          onChange={(e) => setCardPairs(Number(e.target.value))}
          type="number"
          name="pairs"
          id="pairs"
        />
        <br />
        <label htmlFor="maxdecimalnumber">Max decimal number</label>
        <input
          value={maxDecimalNumber}
          onChange={(e) => setMaxDecimalNumber(Number(e.target.value))}
          type="number"
          name="maxdecimalnumber"
          id="maxdecimalnumber"
        />
        <br />
        <button>Start</button>
      </form>
    </main>
  );
}
