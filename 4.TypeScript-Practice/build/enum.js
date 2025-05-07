"use strict";
// ENUMS HAS TWO TYPE -> NUMERIC AND STRING
// NUMERIC TYPE 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 1] = "North";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["South"] = 3] = "South";
    Direction[Direction["West"] = 4] = "West";
})(Direction || (Direction = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFoudn"] = 404] = "NotFoudn";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
let red = Color.Green;
let east = Direction.East;
console.log(red);
console.log(east);
console.log(StatusCodes.Accepted);
// STRING ENUMS 
var ColorWithValue;
(function (ColorWithValue) {
    ColorWithValue["Red"] = "Red";
    ColorWithValue["East"] = "East";
    ColorWithValue["South"] = "South";
    ColorWithValue["West"] = "West";
})(ColorWithValue || (ColorWithValue = {}));
;
console.log(ColorWithValue.East);
console.log(ColorWithValue.West);
