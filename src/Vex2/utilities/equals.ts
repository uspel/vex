import { Vector2 } from "@minecraft/server";

export default function equals2(vector1: Vector2, vector2: Vector2) {
  return vector1.x === vector2.x && vector1.y === vector2.y;
}
