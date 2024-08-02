import { Vector2 } from "@minecraft/server";

export default function divide2(vector: Vector2, divisor: number | Vector2) {
  const result: Vector2 = {
    x: vector.x,
    y: vector.y,
  };

  if (typeof divisor === "object") {
    result.x /= divisor.x;
    result.y /= divisor.y;
  } else {
    result.x /= divisor;
    result.y /= divisor;
  }

  return result;
}
