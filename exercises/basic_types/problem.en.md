# Basic types

In Typescript, one declares the type of a variable by placing a `: type` after the variable name. There goes some basic typed variable declarations:

```typescript
const name: string = "Chacrinha";
const age: number = 26;
const birthdate: Date = new Date(1991, 2, 23);
const smokes: boolean = false;
const catchPhrases: string[] = ["Teresinha!", "Vocês querem bacalhau?", "Eu vim para confundir, não para explicar!", "Quem não se comunica, se trumbica!"];
```

Though, Typescript is smart enough to infere types in many cases without explicit type declaration:

```typescript
const name = "Chacrinha"; // variable has type string
const age = 26; // variable has type number
const birthdate = new Date(1991, 2, 23); // variable has type Date
const smokes = false; // variable has type boolean
const catchPhrases: string[] = ["Teresinha!", "Vocês querem bacalhau?", "Eu vim para confundir, não para explicar!", "Quem não se comunica, se trumbica!"]; // variable has type string[]
```

But when type can't be known with certainty, there is the `Any` type:

```typescript
const data = JSON.parse(jsonFileContent); // variable has type any as in anything
```

It is worth saying that Typescript provides types for most Web APIs (as for the JSON used above) and there are types for Node environments too.

***

You goal for this exercise is to fix the type errors of the following code:

```typescript
// excerpt 1

const fatherAge = 42;
const fatherName = "Tiago";
const sonAge = 15;
const sonName = "Pedro";

const diff = fatherName - sonName;
console.log(fatherName + " has " + diff + " years when " + sonName + " was born");

// excerpt 2
// what in hell could I put there
```
