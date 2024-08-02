import { Vector3 } from "@minecraft/server";
import clampNumber from "../../utilities/clamp";

export default function clamp3(vector: Vector3, min?: Partial<Vector3>, max?: Partial<Vector3>): Vector3 {
  return {
    x: clampNumber(vector.x, min?.x, max?.x),
    y: clampNumber(vector.y, min?.y, max?.y),
    z: clampNumber(vector.z, min?.z, max?.z),
  };
}
