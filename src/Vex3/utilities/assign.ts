import { Vector3 } from "@minecraft/server";

export default function assign3(vector: Vector3, components: Partial<Vector3>): Vector3 {
  return {
    x: components.x ?? vector.x,
    y: components.y ?? vector.y,
    z: components.z ?? vector.z,
  };
}
