import { Vector3 } from "@minecraft/server";

export default function round3(vector: Vector3): Vector3 {
  return {
    x: Math.round(vector.x),
    y: Math.round(vector.y),
    z: Math.round(vector.z),
  };
}
