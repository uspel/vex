import { Vector2 } from "@minecraft/server";

export default function assign2(vector: Vector2, components: Partial<Vector2>): Vector2 {
  return {
    x: components.x ?? vector.x,
    y: components.y ?? vector.y,
  };
}
