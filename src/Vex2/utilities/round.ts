import { Vector2 } from "@minecraft/server";

export default function round2(vector: Vector2): Vector2 {
  return {
    x: Math.round(vector.x),
    y: Math.round(vector.y),
  };
}
