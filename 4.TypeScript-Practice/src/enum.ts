

// ENUMS HAS TWO TYPE -> NUMERIC AND STRING

// NUMERIC TYPE 

enum Color {
    Red,
    Green,
    Yellow
}

enum Direction {
    North = 1,
    East,
    South,
    West
}

enum StatusCodes {
    NotFoudn = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

let red = Color.Green;
let east = Direction.East

console.log(red)
console.log(east)
console.log(StatusCodes.Accepted)

// STRING ENUMS 

enum ColorWithValue {
    Red = "Red",
    East = "East",
    South = "South",
    West = "West"
};

console.log(ColorWithValue.East)
console.log(ColorWithValue.West)