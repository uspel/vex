export default function clampNumber(num: number, min: number = -Infinity, max: number = Infinity) {
  return Math.min(Math.max(num, min), max);
}
