import { Vector2 } from "@minecraft/server";
import dot2 from "./dot";
import normalize2 from "./normalize";

export default function slerp2(start: Vector2, end: Vector2, interpolant: number): Vector2 {
  const startNormalized = normalize2(start);
  const endNormalized = normalize2(end);

  const dot = dot2(startNormalized, endNormalized);

  const theta = Math.acos(dot);
  const sinTheta = Math.sin(theta);

  const weightStart = Math.sin((1 - interpolant) * theta) / sinTheta;
  const weightEnd = Math.sin(interpolant * theta) / sinTheta;

  return {
    x: weightStart * start.x + weightEnd * end.x,
    y: weightStart * start.y + weightEnd * end.y,
  };
}
