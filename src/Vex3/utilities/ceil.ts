import { Vector3 } from "@minecraft/server";

export default function ceil3(vector: Vector3): Vector3 {
  return {
    x: Math.ceil(vector.x),
    y: Math.ceil(vector.y),
    z: Math.ceil(vector.z),
  };
}
