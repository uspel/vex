import { Vector2 } from "@minecraft/server";

export default function multiply2(vector: Vector2, multiplier: number | Vector2) {
  const result: Vector2 = {
    x: vector.x,
    y: vector.y,
  };

  if (typeof multiplier === "object") {
    result.x *= multiplier.x;
    result.y *= multiplier.y;
  } else {
    result.x *= multiplier;
    result.y *= multiplier;
  }

  return result;
}
