import { Vector3, Direction } from "@minecraft/server";

export default function from3(x: number, y: number, z: number): Vector3;
export default function from3(components: Partial<Vector3>): Vector3;
export default function from3(scalar: number): Vector3;
export default function from3(direction: Direction, steps?: number): Vector3;
export default function from3(
  a: number | Partial<Vector3> | Direction,
  b?: number,
  c?: number
): Vector3 {
  // (x, y, z) or scalar
  if (typeof a === "number")
    return {
      x: a,
      y: b ?? a,
      z: c ?? a,
    };

  // Components
  if (typeof a === "object")
    return {
      x: a.x ?? 0,
      y: a.y ?? 0,
      z: a.z ?? 0,
    };

  // Direction
  const steps = b ?? 1;

  if (a === Direction.Down) return { x: 0, y: -steps, z: 0 };
  if (a === Direction.Up) return { x: 0, y: steps, z: 0 };
  if (a === Direction.North) return { x: 0, y: 0, z: -steps };
  if (a === Direction.South) return { x: 0, y: 0, z: steps };
  if (a === Direction.West) return { x: -steps, y: 0, z: 0 };
  if (a === Direction.East) return { x: steps, y: 0, z: 0 };

  // Fallback
  return { x: 0, y: 0, z: 0 };
}
