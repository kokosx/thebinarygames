import CardsBoard from "../components/CardsBoard";
import { NumberTypes } from "../lib/useGame";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The binary games" },
    { name: "description", content: "Play the binary games!" },
  ];
}

export default function Home() {
  return (
    <main>
      <form action="">
        <label htmlFor="sideonetype">Side one numbers</label>
        <select name="sideonetype" id="sideonetype">
          <option value="2">Binary</option>
          <option value="10">Decimal</option>
          <option value="8">Octal</option>
          <option value="16">Hexadecimal</option>
        </select>
        <br />
        <label htmlFor="sidetwotype">Side two numbers</label>
        <select name="sidetwotype" id="sidetwotype">
          <option value="2">Binary</option>
          <option value="10">Decimal</option>
          <option value="8">Octal</option>
          <option value="16">Hexadecimal</option>
        </select>
      </form>
      <CardsBoard />
    </main>
  );
}
