import { Vector2 } from "@minecraft/server";
import magnitude2 from "./magnitude";
import subtract2 from "./subtract";

export default function distance2(vector1: Vector2, vector2: Vector2): number {
  return magnitude2(subtract2(vector1, vector2));
}
