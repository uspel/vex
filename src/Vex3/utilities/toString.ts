import { Vector3 } from "@minecraft/server";
import { VectorStringOptions } from "../../types";

export default function toString3(vector: Vector3, options?: VectorStringOptions): string {
  const { fractionDigits = 2, delimiter = " " } = options ?? {};

  const string = [vector.x.toFixed(fractionDigits), vector.y.toFixed(fractionDigits), vector.z.toFixed(fractionDigits)];
  return string.join(delimiter);
}
