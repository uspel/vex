import { Vector2 } from "@minecraft/server";

export default function max2(...vectors: Vector2[]): Vector2 {
  const result: Vector2 = {
    x: -Infinity,
    y: -Infinity,
  };

  for (const vector of vectors) {
    if (vector.x > result.x) result.x = vector.x;
    if (vector.y > result.y) result.y = vector.y;
  }

  return result;
}
