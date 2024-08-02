import { Vector2 } from "@minecraft/server";

export default function add2(vector1: Vector2, vector2: Vector2): Vector2 {
  return {
    x: vector1.x + vector2.x,
    y: vector1.y + vector2.y,
  };
}
