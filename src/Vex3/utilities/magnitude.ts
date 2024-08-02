import { Vector3 } from "@minecraft/server";

export default function magnitude3(vector: Vector3) {
  return Math.sqrt(vector.x ** 2 + vector.y ** 2 + vector.z ** 2);
}
