import { Vector3 } from "@minecraft/server";

export default function equals3(vector1: Vector3, vector2: Vector3) {
  return vector1.x === vector2.x && vector1.y === vector2.y && vector1.z === vector2.z;
}
