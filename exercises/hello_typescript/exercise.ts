import * as path from "path";
import { checkAll } from "../../lib/checkAll";
import { depedencyCheck } from "../../lib/depedencyCheck";
import { fileCheck } from "../../lib/fileCheck";

module.exports = function() {
	const problem: Problem = {
		requireSubmission: true,
		problem: { file: path.join(__dirname, "problem.{lang}.md") },
		verify: function(_, cb) {
			checkAll(
				[
					depedencyCheck("typescript"),
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
