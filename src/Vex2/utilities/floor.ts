import { Vector2 } from "@minecraft/server";

export default function floor2(vector: Vector2): Vector2 {
  return {
    x: Math.floor(vector.x),
    y: Math.floor(vector.y),
  };
}
