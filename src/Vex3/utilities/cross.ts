import { Vector3 } from "@minecraft/server";

export default function cross3(vector1: Vector3, vector2: Vector3): Vector3 {
  return {
    x: vector1.y * vector2.z - vector1.z * vector2.y,
    y: vector1.z * vector2.x - vector1.x * vector2.z,
    z: vector1.x * vector2.y - vector1.y * vector2.x,
  };
}
