import * as Workshopper from "workshopper-adventure";

const workshop = new Workshopper({
	name: "typescript-workshop",
	appDir: __dirname,
});

workshop.addAll(["Hello, Typescript!"]);

// workshop.execute(process.argv.slice(2));
module.exports = workshop;
