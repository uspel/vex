import { Vector2 } from "@minecraft/server";
import clampNumber from "../../utilities/clamp";

export default function dot2(vector1: Vector2, vector2: Vector2): number {
  return clampNumber(vector1.x * vector2.x + vector1.y * vector2.y, -1, 1);
}
