export interface VectorStringOptions {
  /**
   * String to separate vector components with.
   *
   * @default " "
   */
  delimiter?: string;
  /**
   * Number of digits after the decimal point of each component. Must be in the range 0 - 20, inclusive.
   *
   * @default 2
   */
  fractionDigits?: number;
}
