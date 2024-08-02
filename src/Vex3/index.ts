import { Direction, Vector2, Vector3 } from "@minecraft/server";
import { VectorStringOptions } from "../types";
import Vex3Utilities from "./utilities";

export class Vex3 extends Vex3Utilities implements Vector3 {
  // ----------------------------------------
  //           Instance Constructor
  // ----------------------------------------

  /** Creates a new Vex3 instance from different data types. */
  constructor(x: number, y: number, z: number);
  constructor(components: Partial<Vector3>);
  constructor(scalar: number);
  constructor(direction: Direction, steps?: number);
  constructor(a: number | Partial<Vector3> | Direction, b?: number, c?: number) {
    super();

    // @ts-ignore
    const { x, y, z } = Vex3.from(a, b, c);

    this.x = x;
    this.y = y;
    this.z = z;
  }

  // ----------------------------------------
  //           Instance Properties
  // ----------------------------------------

  /** The X component of this vector. */
  x: number;

  /** The Y component of this vector. */
  y: number;

  /** The Z component of this vector. */
  z: number;

  /** Calculates the magnitude of this vector. */
  get magnitude() {
    return Vex3.magnitude(this);
  }

  // ----------------------------------------
  //             Instance Methods
  // ----------------------------------------

  /** Adds another vector to this vector. */
  add(vector: Vector3) {
    return this.assign(Vex3.add(this, vector));
  }

  /** Assigns components to this vector. */
  assign(components: Partial<Vector3>) {
    const { x, y, z } = Vex3.assign(this, components);

    this.x = x;
    this.y = y;
    this.z = z;

    return this;
  }

  /** Performs a ceiling function on each component of this vector. */
  ceil() {
    return this.assign(Vex3.ceil(this));
  }

  /** Clamps all components of this vector between those of a minimum and maximum vector. */
  clamp(min?: Partial<Vector3>, max?: Partial<Vector3>) {
    return this.assign(Vex3.clamp(this, min, max));
  }

  /** Calculates the cross product of this vector and another vector. */
  cross(vector: Vector3) {
    return this.assign(Vex3.cross(this, vector));
  }

  /** Calculates the distance between this vector and another vector. */
  distance(vector: Vector3) {
    return Vex3.distance(this, vector);
  }

  /** Divides this vector by a scalar value or another vector. */
  divide(divisor: number | Vector3) {
    return this.assign(Vex3.divide(this, divisor));
  }

  /** Calculates the dot product of this vector and another vector. */
  dot(vector: Vector3) {
    return Vex3.dot(this, vector);
  }

  /** Checks whether this vector is equal to another vector. */
  equals(vector: Vector3) {
    return Vex3.equals(this, vector);
  }

  /** Performs a floor function on each component of this vector. */
  floor() {
    return this.assign(Vex3.floor(this));
  }

  /** Multiplies this vector by a scalar value or another vector. */
  multiply(multiplier: number | Vector3) {
    return this.assign(Vex3.multiply(this, multiplier));
  }

  /** Normalizes this vector. */
  normalize() {
    return this.assign(Vex3.normalize(this));
  }

  /** Rounds each component of this vector. */
  round() {
    return this.assign(Vex3.round(this));
  }

  /** Subtracts another vector from this vector. */
  subtract(vector: Vector3) {
    return this.assign(Vex3.subtract(this, vector));
  }

  /** Creates a string representation of this vector. */
  toString(options?: VectorStringOptions) {
    return Vex3.toString(this, options);
  }
}
