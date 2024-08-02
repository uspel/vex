import { Direction, Vector2, Vector3 } from "@minecraft/server";

export default function from2(x: number, y: number): Vector2;
export default function from2(components: Partial<Vector2>): Vector2;
export default function from2(scalar: number): Vector2;
export default function from2(direction: Direction, steps?: number): Vector2;
export default function from2(a: number | Partial<Vector2> | Direction, b?: number): Vector2 {
  // (x, y, z) or scalar
  if (typeof a === "number")
    return {
      x: a,
      y: b ?? a,
    };

  // Components
  if (typeof a === "object")
    return {
      x: a.x ?? 0,
      y: a.y ?? 0,
    };

  // Direction
  const steps = b ?? 1;
  if (a === Direction.Down) return { x: 0, y: -steps };
  if (a === Direction.Up) return { x: 0, y: steps };
  if (a === Direction.West) return { x: -steps, y: 0 };
  if (a === Direction.East) return { x: steps, y: 0 };

  // Fallback
  return { x: 0, y: 0 };
}
