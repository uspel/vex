import { Vector2 } from "@minecraft/server";
import magnitude2 from "./magnitude";

export default function normalize2(vector: Vector2): Vector2 {
  const magnitude = magnitude2(vector);

  return {
    x: vector.x / magnitude,
    y: vector.y / magnitude,
  };
}
