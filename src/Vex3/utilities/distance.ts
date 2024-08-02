import { Vector3 } from "@minecraft/server";
import magnitude3 from "./magnitude";
import subtract3 from "./subtract";

export default function distance3(vector1: Vector3, vector2: Vector3): number {
  return magnitude3(subtract3(vector1, vector2));
}
