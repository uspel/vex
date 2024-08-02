import { Vector3 } from "@minecraft/server";

export default function subtract3(vector1: Vector3, vector2: Vector3): Vector3 {
  return {
    x: vector1.x - vector2.x,
    y: vector1.y - vector2.y,
    z: vector1.z - vector2.z,
  };
}
