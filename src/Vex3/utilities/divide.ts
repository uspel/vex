import { Vector3 } from "@minecraft/server";

export default function divide3(vector: Vector3, divisor: number | Vector3) {
  const result: Vector3 = {
    x: vector.x,
    y: vector.y,
    z: vector.z,
  };

  if (typeof divisor === "object") {
    result.x /= divisor.x;
    result.y /= divisor.y;
    result.z /= divisor.z;
  } else {
    result.x /= divisor;
    result.y /= divisor;
    result.z /= divisor;
  }

  return result;
}
