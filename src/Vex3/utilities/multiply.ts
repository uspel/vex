import { Vector3 } from "@minecraft/server";

export default function multiply3(vector: Vector3, multiplier: number | Vector3) {
  const result: Vector3 = {
    x: vector.x,
    y: vector.y,
    z: vector.z,
  };

  if (typeof multiplier === "object") {
    result.x *= multiplier.x;
    result.y *= multiplier.y;
    result.z *= multiplier.z;
  } else {
    result.x *= multiplier;
    result.y *= multiplier;
    result.z *= multiplier;
  }

  return result;
}
