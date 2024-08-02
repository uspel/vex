import { Vector3 } from "@minecraft/server";

export default function lerp3(start: Vector3, end: Vector3, interpolant: number): Vector3 {
  return {
    x: start.x + (end.x - start.x) * interpolant,
    y: start.y + (end.y - start.y) * interpolant,
    z: start.z + (end.z - start.z) * interpolant,
  };
}
