import { Game } from "../lib/useGame";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The binary games" },
    { name: "description", content: "Play the binary games!" },
  ];
}

export default function Home() {
  const game = new Game();
  game.createGame(10, 16, 10, 3, 128);

  return <></>;
}
