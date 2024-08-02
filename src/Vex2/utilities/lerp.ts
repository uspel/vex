import { Vector2 } from "@minecraft/server";

export default function lerp2(start: Vector2, end: Vector2, interpolant: number): Vector2 {
  return {
    x: start.x + (end.x - start.x) * interpolant,
    y: start.y + (end.y - start.y) * interpolant,
  };
}
