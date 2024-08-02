import add3 from "./add";
import assign3 from "./assign";
import ceil3 from "./ceil";
import clamp3 from "./clamp";
import cross3 from "./cross";
import distance3 from "./distance";
import divide3 from "./divide";
import dot3 from "./dot";
import equals3 from "./equals";
import floor3 from "./floor";
import from3 from "./from";
import lerp3 from "./lerp";
import magnitude3 from "./magnitude";
import max3 from "./max";
import min3 from "./min";
import multiply3 from "./multiply";
import normalize3 from "./normalize";
import round3 from "./round";
import slerp3 from "./slerp";
import subtract3 from "./subtract";
import toString3 from "./toString";

export default class Vex3Utilities {
  /** Creates a new Vector3 by adding two vectors together. */
  static add = add3;

  /** Creates a new Vector3 by assigning components to a vector. */
  static assign = assign3;

  /** Creates a new Vector3 by performing a ceiling function on each component of a vector. */
  static ceil = ceil3;

  /** Creates a new Vector3 by clamping each component of a vector between those of a minimum and maximum vector. */
  static clamp = clamp3;

  /** Calculates the cross product of two vectors. */
  static cross = cross3;

  /** Calculates the distance between two vectors. */
  static distance = distance3;

  /** Creates a new Vector2 by dividing a vector by a scalar value or another vector. */
  static divide = divide3;

  /** Calculates the dot product of two vectors. */
  static dot = dot3;

  /** Checks whether two vectors are equal. */
  static equals = equals3;

  /** Creates a new Vector3 by performing a floor function on each component of a vector. */
  static floor = floor3;

  /** Creates a new Vector3 from different data types. */
  static from = from3;

  /** Creates a new Vector3 by using linear interpolation on each component of two vectors. */
  static lerp = lerp3;

  /** Calculates the magnitude of a vector. */
  static magnitude = magnitude3;

  /** Creates a new Vector3 from the largest values of each component in the provided vectors. */
  static max = max3;

  /** Creates a new Vector3 from the smallest values of each component in the provided vectors. */
  static min = min3;

  /** Creates a new Vector3 by multiplying a vector by a scalar value or another vector. */
  static multiply = multiply3;

  /** Creates a new Vector3 by normalizing a vector. */
  static normalize = normalize3;

  /** Creates a new Vector3 by rounding each component of a vector. */
  static round = round3;

  /** Creates a new Vector3 by using spherical linear interpolation on each component of two vectors. */
  static slerp = slerp3;

  /** Creates a new Vector3 by subtracting the second vector from the first vector. */
  static subtract = subtract3;

  /** Creates a string representation of a Vector3. */
  static toString = toString3;
}
