# Hello, Typescript

Typescript is a typed superset for Javascript, increasing type safety and providing advanced tooling for developers, such as autocomplete on text editors. Superset means that every valid Javascript file is already a valid Typescript file.

For this exercise, start a node package (`npm init` or `yarn init`), install typescript 2.6.2 or greater (`npm i -d typescript ^2.6.2` or `yarn add -D typescript ^2.6.2`) and create a `index.ts` file with the following content:

```typescript
Math.sqrt(4);
Math.sqrt("16");
Math.sqrt("Typescript");
Math.sqrt({});
Math.sqrt(true);
Math.sqrt(new Date());
```

After that, run `npx tsc index.ts`. `npx` runs a locally installed package. In that case, the binary `tsc` (TypeScript Compiler) that comes with the package `typescript`, that compiles Typescript files to Javascript. Finally, `index.ts` is the file to be compiled. As a result, there should be a new file after running the command: `index.js`.

Read the type errors you will get, and read the resulting `index.js` (yes, the file is compiled even if there are errors).

Preferentially, open that file in your favorite editor (VSCode, Atom, Brackets, Sublime Text, codesandbox.io or whatever pleases you, really) after setting it up for Typescript support. You should see errors in all lines except the 1st, as the function Math.sqrt doesn't accept the *type* of the provided arguments. In the next exercise we'll learn more about what *types* are.
