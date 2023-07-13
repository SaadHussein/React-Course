let age: number = 24;
age = 12;

let userName: string | string[];
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

let people: Person[];

//let course = "React - The Complete Guide"; //Automaticly will be string
// course = 55255; This is an Error     This is type inferencs

let course: string | number = "React - The Complete Guide"; //Union Types
course = 55255;

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning<string>(["a", "b", "c"], "d");

// updatedArray[0].split(""); error because it is a number
stringArray[0].split(""); //true because it is string
