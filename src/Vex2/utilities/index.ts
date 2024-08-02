import add2 from "./add";
import assign2 from "./assign";
import ceil2 from "./ceil";
import clamp2 from "./clamp";
import distance2 from "./distance";
import divide2 from "./divide";
import dot2 from "./dot";
import equals2 from "./equals";
import floor2 from "./floor";
import from2 from "./from";
import lerp2 from "./lerp";
import magnitude2 from "./magnitude";
import max2 from "./max";
import min2 from "./min";
import multiply2 from "./multiply";
import normalize2 from "./normalize";
import round2 from "./round";
import slerp2 from "./slerp";
import subtract2 from "./subtract";
import toString2 from "./toString";

export default class Vex2Utilities {
  /** Creates a new Vector2 by adding two vectors together. */
  static add = add2;

  /** Creates a new Vector2 by assigning components to a vector. */
  static assign = assign2;

  /** Creates a new Vector2 by performing a ceiling function on each component of a vector. */
  static ceil = ceil2;

  /** Creates a new Vector2 by clamping each component of a vector between those of a minimum and maximum vector. */
  static clamp = clamp2;

  /** Calculates the distance between two vectors. */
  static distance = distance2;

  /** Creates a new Vector2 by dividing a vector by a scalar value or another vector. */
  static divide = divide2;

  /** Calculates the dot product of two vectors. */
  static dot = dot2;

  /** Checks whether two vectors are equal. */
  static equals = equals2;

  /** Creates a new Vector2 by performing a floor function on each component of a vector. */
  static floor = floor2;

  /** Creates a new Vector2 from different data types. */
  static from = from2;

  /** Creates a new Vector2 by using linear interpolation on each component of two vectors. */
  static lerp = lerp2;

  /** Calculates the magnitude of a vector. */
  static magnitude = magnitude2;

  /** Creates a new Vector2 from the largest values of each component in the provided vectors. */
  static max = max2;

  /** Creates a new Vector2 from the smallest values of each component in the provided vectors. */
  static min = min2;

  /** Creates a new Vector2 by multiplying a vector by a scalar value or another vector. */
  static multiply = multiply2;

  /** Creates a new Vector2 by normalizing a vector. */
  static normalize = normalize2;

  /** Creates a new Vector2 by rounding each component of a vector. */
  static round = round2;

  /** Creates a new Vector2 by using spherical linear interpolation on each component of two vectors. */
  static slerp = slerp2;

  /** Creates a new Vector2 by subtracting the second vector from the first vector. */
  static subtract = subtract2;

  /** Creates a string representation of a Vector2. */
  static toString = toString2;
}
