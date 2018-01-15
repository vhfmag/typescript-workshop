import * as path from "path";
import { checkAll } from "../../lib/checkAll";
import { dependencyCheck } from "../../lib/depedencyCheck";
import { fileCheck } from "../../lib/fileCheck";

module.exports = function() {
	const problem: Problem = {
		requireSubmission: true,
		problem: { file: path.join(__dirname, "problem.{lang}.md") },
		verify: function(_, cb) {
			checkAll(
				[
					dependencyCheck("typescript", "^2.6.2"),
					fileCheck("index.ts"),
					fileCheck("index.js"),
				],
				"{exercises.hello_typescript.success}",
				"{exercises.hello_typescript.fail}",
				cb,
			);
		},
	};

	return problem;
};
