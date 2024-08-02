import { Vector3 } from "@minecraft/server";

export default function floor3(vector: Vector3): Vector3 {
  return {
    x: Math.floor(vector.x),
    y: Math.floor(vector.y),
    z: Math.floor(vector.z),
  };
}
