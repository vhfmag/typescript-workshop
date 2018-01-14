import * as WorkshopperExercise from "workshopper-exercise";
import * as Filecheck from "workshopper-exercise/filecheck";
// import * as CompareStdOut from "workshopper-exercise/comparestdout";
// import * as Execute from "workshopper-exercise/execute";
// import * as Typescript from "typescript";

let exercise = new WorkshopperExercise();
exercise.longCompareOutput = true;
exercise = Filecheck(exercise);

exercise.addVerifyProcessor(function() {
	console.log({ arguments, this: this });
});
