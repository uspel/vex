import { Vector2 } from "@minecraft/server";

export default function ceil2(vector: Vector2): Vector2 {
  return {
    x: Math.ceil(vector.x),
    y: Math.ceil(vector.y),
  };
}
