import { Direction, Vector2, Vector3 } from "@minecraft/server";
import { VectorStringOptions } from "../types";
import Vex2Utilities from "./utilities";

export class Vex2 extends Vex2Utilities implements Vector2 {
  // ----------------------------------------
  //           Instance Constructor
  // ----------------------------------------

  /** Creates a new Vex2 instance from different data types. */
  constructor(x: number, y: number);
  constructor(vector: Vector2 | Vector3);
  constructor(scalar: number);
  constructor(direction: Direction, steps?: number);
  constructor(a: number | Vector2 | Vector3 | Direction, b?: number) {
    super();

    // @ts-ignore
    const { x, y } = Vex2.from(a, b);

    this.x = x;
    this.y = y;
  }

  // ----------------------------------------
  //           Instance Properties
  // ----------------------------------------

  /** The X component of this vector. */
  x: number;

  /** The Y component of this vector. */
  y: number;

  /** Calculates the magnitude of this vector. */
  get magnitude() {
    return Vex2.magnitude(this);
  }

  // ----------------------------------------
  //             Instance Methods
  // ----------------------------------------

  /** Adds another vector to this vector. */
  add(vector: Vector2) {
    this.assign(Vex2.add(this, vector));
  }

  /** Assigns components to this vector. */
  assign(components: Partial<Vector2>) {
    const { x, y } = Vex2.assign(this, components);

    this.x = x;
    this.y = y;

    return this;
  }

  /** Performs a ceiling function on each component of this vector. */
  ceil() {
    return this.assign(Vex2.ceil(this));
  }

  /** Clamps all components of this vector between those of a minimum and maximum vector. */
  clamp(min?: Partial<Vector2>, max?: Partial<Vector2>) {
    return this.assign(Vex2.clamp(this, min, max));
  }

  /** Calculates the distance between this vector and another vector. */
  distance(vector: Vector2) {
    return Vex2.distance(this, vector);
  }

  /** Divides this vector by a scalar value or another vector. */
  divide(divisor: number | Vector2) {
    return this.assign(Vex2.divide(this, divisor));
  }

  /** Calculates the dot product of this vector and another vector. */
  dot(vector: Vector2) {
    return Vex2.dot(this, vector);
  }

  /** Checks whether this vector is equal to another vector. */
  equals(vector: Vector2) {
    return Vex2.equals(this, vector);
  }

  /** Performs a floor function on each component of this vector. */
  floor() {
    return this.assign(Vex2.floor(this));
  }

  /** Multiplies this vector by a scalar value or another vector. */
  multiply(multiplier: number | Vector2) {
    return this.assign(Vex2.multiply(this, multiplier));
  }

  /** Normalizes this vector. */
  normalize() {
    return this.assign(Vex2.normalize(this));
  }

  /** Rounds each component of this vector. */
  round() {
    return this.assign(Vex2.round(this));
  }

  /** Subtracts another vector from this vector. */
  subtract(vector: Vector2) {
    return this.assign(Vex2.subtract(this, vector));
  }

  /** Creates a string representation of this vector. */
  toString(options?: VectorStringOptions) {
    return Vex2.toString(this, options);
  }
}
