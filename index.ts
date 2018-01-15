import * as Workshopper from "workshopper-adventure";

const workshop = new Workshopper({
	name: "typescript-workshop",
	appDir: __dirname,
	languages: ["en", "pt-br"],
});

workshop.addAll(["Hello, Typescript!", "Basic Types"]);

// workshop.execute(process.argv.slice(2));
module.exports = workshop;
