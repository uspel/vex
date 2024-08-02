import { Vector3 } from "@minecraft/server";
import dot3 from "./dot";
import normalize3 from "./normalize";

export default function slerp3(start: Vector3, end: Vector3, interpolant: number): Vector3 {
  const startNormalized = normalize3(start);
  const endNormalized = normalize3(end);

  const dot = dot3(startNormalized, endNormalized);

  const theta = Math.acos(dot);
  const sinTheta = Math.sin(theta);

  const weightStart = Math.sin((1 - interpolant) * theta) / sinTheta;
  const weightEnd = Math.sin(interpolant * theta) / sinTheta;

  return {
    x: weightStart * start.x + weightEnd * end.x,
    y: weightStart * start.y + weightEnd * end.y,
    z: weightStart * start.z + weightEnd * end.z,
  };
}
