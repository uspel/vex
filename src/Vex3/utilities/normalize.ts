import { Vector3 } from "@minecraft/server";
import magnitude3 from "./magnitude";

export default function normalize3(vector: Vector3): Vector3 {
  const magnitude = magnitude3(vector);

  return {
    x: vector.x / magnitude,
    y: vector.y / magnitude,
    z: vector.z / magnitude,
  };
}
