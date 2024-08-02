import { Vector3 } from "@minecraft/server";

export default function min3(...vectors: Vector3[]): Vector3 {
  const result: Vector3 = {
    x: Infinity,
    y: Infinity,
    z: Infinity,
  };

  for (const vector of vectors) {
    if (vector.x < result.x) result.x = vector.x;
    if (vector.y < result.y) result.y = vector.y;
    if (vector.z < result.z) result.z = vector.z;
  }

  return result;
}
