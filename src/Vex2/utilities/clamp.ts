import { Vector2 } from "@minecraft/server";
import clampNumber from "../../utilities/clamp";

export default function clamp2(vector: Vector2, min?: Partial<Vector2>, max?: Partial<Vector2>): Vector2 {
  return {
    x: clampNumber(vector.x, min?.x, max?.x),
    y: clampNumber(vector.y, min?.y, max?.y),
  };
}
