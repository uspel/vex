import { Vector2 } from "@minecraft/server";
import { VectorStringOptions } from "../../types";

export default function toString2(vector: Vector2, options?: VectorStringOptions): string {
  const { fractionDigits = 2, delimiter = " " } = options ?? {};

  const string = [vector.x.toFixed(fractionDigits), vector.y.toFixed(fractionDigits)];
  return string.join(delimiter);
}
