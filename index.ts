import * as Workshopper from "workshopper-adventure";

const workshop = new Workshopper({
	name: "typescript-workshop",
	appDir: __dirname,
});

workshop.addAll(["Hello, Typescript!"]);

// workshop.run("a1", "hello-typescript", console.log);

module.exports = workshop;
