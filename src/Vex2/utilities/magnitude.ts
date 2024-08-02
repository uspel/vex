import { Vector2 } from "@minecraft/server";

export default function magnitude2(vector: Vector2) {
  return Math.sqrt(vector.x ** 2 + vector.y ** 2);
}
