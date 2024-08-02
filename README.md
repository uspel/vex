# Vex

Your _"friendly"_ helper for performing mathematical operations on vectors.

## Contents

- [Features](#features)
- [Vex2](#vex2) — Utilities for two-dimensional vectors.
  - [Static Methods](#vex2-static-methods)
  - [Instance Methods](#vex2-instance-methods)
  - [Instance Properties](#vex2-instance-properties)
- [Vex3](#vex3) — Utilities for three-dimensional vectors.
  - [Static Methods](#vex3-static-methods)
  - [Instance Methods](#vex3-instance-methods)
  - [Instance Properties](#vex3-instance-properties)

## Features

- Methods for both mutating and creating new vectors.

## Vex2

Utilities for two-dimensional vectors.

### Vex2 Static Methods

#### add

Creates a new Vector2 by adding two vectors together.

```js
Vex2.add({ x: 1, y: 1 }, { x: 0, y: 1 });
```

#### assign

Creates a new Vector2 by assigning components to a vector.

```js
Vex2.assign({ x: 0, y: 0 }, { y: 1 });
```

#### ceil

Creates a new Vector2 by performing a ceiling function on each component of a vector.

```js
Vex2.ceil({ x: 0.2, y: 0.6 });
```

#### clamp

Creates a new Vector2 by clamping each component of a vector between those of a minimum and maximum vector.

```js
Vex2.clamp(
  { x: 18, y: 4 },
  { x: 0 }, // Minimum
  { x: 10, y: 10 } // Maximum
);
```

#### distance

Calculates the distance between two vectors.

```js
Vex2.distance({ x: 5, y: 0 }, { x: -2, y: 4 });
```

#### divide

Creates a new Vector2 by dividing a vector by a scalar value or another vector.

```js
Vex2.divide({ x: 4, y: 8 }, 4);
```

```js
Vex2.divide({ x: 4, y: 8 }, { x: 4, y: 2 });
```

#### dot

Calculates the dot product of two vectors.

```js
Vex2.dot({ x: 5, y: 0 }, { x: -2, y: 4 });
```

#### equals

Checks whether two vectors are equal.

```js
Vex2.equals({ x: 5, y: 0 }, { x: -2, y: 4 });
```

#### floor

Creates a new Vector2 by performing a floor function on each component of a vector.

```js
Vex2.floor({ x: 0.2, y: 0.6 });
```

#### from

Creates a new Vector2 from different data types.

```js
Vex2.from(1, 2);
```

```js
Vex2.from({ x: 0, y: 1 });
```

```js
Vex2.from(0);
```

```js
Vex2.from(Direction.North);
```

```js
Vex2.from(Direction.North, 5);
```

#### lerp

Creates a new Vector2 by using linear interpolation on each component of two vectors.

```js
Vex2.lerp(
  { x: 5, y: 0 }, // Start
  { x: -2, y: 4 }, // End
  0.5 // Interpolant
);
```

#### magnitude

Calculates the magnitude of a vector.

```js
Vex2.magnitude({ x: 2, y: 5 });
```

#### max

Creates a new Vector2 from the largest values of each component in the provided vectors.

```js
Vex2.max({ x: 5, y: 0 }, { x: -2, y: 4 });
```

#### min

Creates a new Vector2 from the smallest values of each component in the provided vectors.

```js
Vex2.min({ x: 5, y: 0 }, { x: -2, y: 4 });
```

#### multiply

Creates a new Vector2 by multiplying a vector by a scalar value or another vector.

```js
Vex2.multiply({ x: 4, y: 8 }, 4);
```

```js
Vex2.multiply({ x: 4, y: 8 }, { x: 4, y: 2 });
```

#### normalize

Creates a new Vector2 by normalizing a vector.

```js
Vex2.normalize({ x: 2, y: 5 });
```

#### round

Creates a new Vector2 by rounding each component of a vector.

```js
Vex2.round({ x: 0.2, y: 0.6 });
```

#### slerp

Creates a new Vector2 by using spherical linear interpolation on each component of two vectors.

```js
Vex2.slerp(
  { x: 5, y: 0 }, // Start
  { x: -2, y: 4 }, // End
  0.5 // Interpolant
);
```

#### subtract

Creates a new Vector2 by subtracting the second vector from the first vector.

```js
Vex2.subtract({ x: 1, y: 1 }, { x: 0, y: 1 });
```

#### toString

Creates a string representation of a Vector2.

```js
Vex2.toString(
  { x: 0.2, y: 0.6 },
  { fractionDigits: 1 }
);
```

### Vex2 Instance Methods

#### constructor

Creates a new Vex2 instance from different data types.

```js
const vector = new Vex2(1, 2);
```

```js
const vector = new Vex2({ x: 0, y: 1 });
```

```js
const vector = new Vex2(0);
```

```js
const vector = new Vex2(Direction.Up);
```

```js
const vector = new Vex2(Direction.Up, 5);
```

#### add

Adds another vector to this vector.

```js
vector.add({ x: 0, y: 1 });
```

#### assign

Assigns components to this vector.

```js
vector.assign({ y: 1 });
```

#### ceil

Performs a ceiling function on each component of this vector.

```js
vector.ceil();
```

#### clamp

Clamps all components of this vector between those of a minimum and maximum vector.

```js
vector.clamp(
  { x: 0 }, // Minimum
  { x: 10, y: 10 } // Maximum
);
```

#### distance

Calculates the distance between this vector and another vector

```js
vector.distance({ x: -2, y: 4 });
```

#### divide

Divides this vector by a scalar value or another vector.

```js
vector.divide(4);
```

```js
vector.divide({ x: 4, y: 2 });
```

#### dot

Calculates the dot product of this vector and another vector.

```js
vector.dot({ x: -2, y: 4 });
```

#### equals

Checks whether this vector is equal to another vector.

```js
vector.equals({ x: -2, y: 4 });
```

#### floor

Performs a floor function on each component of this vector.

```js
vector.floor();
```

#### multiply

Multiplies this vector by a scalar value or another vector.

```js
vector.multiply(4);
```

```js
vector.multiply({ x: 4, y: 2 });
```

#### normalize

Normalizes this vector.

```js
vector.normalize();
```

#### round

Rounds each component of this vector.

```js
vector.round();
```

#### subtract

Subtracts another vector from this vector

```js
vector.subtract({ x: 0, y: 1 });
```

#### toString

Creates a string representation of this vector.

```js
vector.toString({ fractionDigits: 1 });
```

### Vex2 Instance Properties

#### magnitude

Calculates the magnitude of this vector.

```js
vector.magnitude;
```

## Vex3

Utilities for three-dimensional vectors.

### Vex3 Static Methods

#### add

Creates a new Vector3 by adding two vectors together.

```js
Vex3.add(
  { x: 1, y: 1, z: 2 },
  { x: 0, y: 1, z: 5 }
);
```

#### assign

Creates a new Vector3 by assigning components to a vector.

```js
Vex3.assign({ x: 0, y: 0, z: 2 }, { y: 1, x: 0 });
```

#### ceil

Creates a new Vector3 by performing a ceiling function on each component of a vector.

```js
Vex3.ceil({ x: 0.2, y: 0.6, z: 0.5 });
```

#### clamp

Creates a new Vector3 by clamping each component of a vector between those of a minimum and maximum vector.

```js
Vex3.clamp(
  { x: 18, y: 4, z: 0 },
  { x: 0, z: 5 }, // Minimum
  { x: 10, y: 10 } // Maximum
);
```

#### distance

Calculates the distance between two vectors.

```js
Vex3.distance(
  { x: 5, y: 0, z: 8 },
  { x: -2, y: 4, z: -12 }
);
```

#### divide

Creates a new Vector3 by dividing a vector by a scalar value or another vector.

```js
Vex3.divide({ x: 4, y: 8, z: 18 }, 4);
```

```js
Vex3.divide(
  { x: 4, y: 8, z: 18 },
  { x: 4, y: 2, z: 3 }
);
```

#### dot

Calculates the dot product of two vectors.

```js
Vex3.dot(
  { x: 5, y: 0, z: 8 },
  { x: -2, y: 4, z: -12 }
);
```

#### equals

Checks whether two vectors are equal.

```js
Vex3.equals(
  { x: 5, y: 0, z: 8 },
  { x: -2, y: 4, z: -12 }
);
```

#### floor

Creates a new Vector3 by performing a floor function on each component of a vector.

```js
Vex3.floor({ x: 0.2, y: 0.6, z: 0.5 });
```

#### from

Creates a new Vector3 from different data types.

```js
Vex3.from(1, 2, 3);
```

```js
Vex3.from({ x: 0, y: 1, z: 5 });
```

```js
Vex3.from(0);
```

```js
Vex3.from(Direction.North);
```

```js
Vex3.from(Direction.North, 5);
```

#### lerp

Creates a new Vector3 by using linear interpolation on each component of two vectors.

```js
Vex3.lerp(
  { x: 5, y: 0 }, // Start
  { x: -2, y: 4 }, // End
  0.5 // Interpolant
);
```

#### magnitude

Calculates the magnitude of a vector.

```js
Vex3.magnitude({ x: 2, y: 5, z: -3 });
```

#### max

Creates a new Vector3 from the largest values of each component in the provided vectors.

```js
Vex3.max(
  { x: 5, y: 0, z: 8 },
  { x: -2, y: 4, z: -12 }
);
```

#### min

Creates a new Vector3 from the smallest values of each component in the provided vectors.

```js
Vex3.min(
  { x: 5, y: 0, z: 8 },
  { x: -2, y: 4, z: -12 }
);
```

#### multiply

Creates a new Vector3 by multiplying a vector by a scalar value or another vector.

```js
Vex3.multiply({ x: 4, y: 8, z: 18 }, 4);
```

```js
Vex3.multiply(
  { x: 4, y: 8, z: 18 },
  { x: 4, y: 2, z: 3 }
);
```

#### normalize

Creates a new Vector3 by normalizing a vector.

```js
Vex3.normalize({ x: 2, y: 5, z: -3 });
```

#### round

Creates a new Vector3 by rounding each component of a vector.

```js
Vex3.round({ x: 0.2, y: 0.6, z: 0.5 });
```

#### slerp

Creates a new Vector3 by using spherical linear interpolation on each component of two vectors.

```js
Vex3.slerp(
  { x: 5, y: 0 }, // Start
  { x: -2, y: 4 }, // End
  0.5 // Interpolant
);
```

#### subtract

Creates a new Vector3 by subtracting the second vector from the first vector.

```js
Vex3.subtract(
  { x: 1, y: 1, z: 2 },
  { x: 0, y: 1, z: 5 }
);
```

#### toString

Creates a string representation of a Vector3.

```js
Vex3.toString(
  { x: 0.2, y: 0.6, z: 0.5 },
  { fractionDigits: 1 }
);
```

### Vex2 Instance Methods

#### constructor

Creates a new Vex3 instance from different data types.

```js
const vector = new Vex3(1, 2, 3);
```

```js
const vector = new Vex3({ x: 0, y: 1, z: 5 });
```

```js
const vector = new Vex3(0);
```

```js
const vector = new Vex3(Direction.North);
```

```js
const vector = new Vex3(Direction.North, 5);
```

#### add

Adds another vector to this vector.

```js
vector.add({ x: 0, y: 1, z: 5 });
```

#### assign

Assigns components to this vector.

```js
vector.assign({ y: 1, z: 0 });
```

#### ceil

Performs a ceiling function on each component of this vector.

```js
vector.ceil();
```

#### clamp

Clamps all components of this vector between those of a minimum and maximum vector.

```js
vector.clamp(
  { x: 0, z: 5 }, // Minimum
  { x: 10, y: 10 } // Maximum
);
```

#### distance

Calculates the distance between this vector and another vector

```js
vector.distance({ x: -2, y: 4, z: 18 });
```

#### divide

Divides this vector by a scalar value or another vector.

```js
vector.divide(4);
```

```js
vector.divide({ x: 4, y: 2, z: 3 });
```

#### dot

Calculates the dot product of this vector and another vector.

```js
vector.dot({ x: -2, y: 4, z: 18 });
```

#### equals

Checks whether this vector is equal to another vector.

```js
vector.equals({ x: -2, y: 4, z: 18 });
```

#### floor

Performs a floor function on each component of this vector.

```js
vector.floor();
```

#### multiply

Multiplies this vector by a scalar value or another vector.

```js
vector.multiply(4);
```

```js
vector.multiply({ x: 4, y: 2, z: 3 });
```

#### normalize

Normalizes this vector.

```js
vector.normalize();
```

#### round

Rounds each component of this vector.

```js
vector.round();
```

#### subtract

Subtracts another vector from this vector

```js
vector.subtract({ x: 0, y: 1, z: 5 });
```

#### toString

Creates a string representation of this vector.

```js
const command = `setblock ${vector} air destroy`;
```

```js
vector.toString({ fractionDigits: 1 });
```

### Vex3 Instance Properties

#### magnitude

Calculates the magnitude of this vector.

```js
vector.magnitude;
```
