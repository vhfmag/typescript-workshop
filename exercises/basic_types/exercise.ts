import * as path from "path";
import { checkAll } from "../../lib/checkAll";
import { fileCheck } from "../../lib/fileCheck";
import { validateTypescriptFile } from "../../lib/validateTypescript";

module.exports = function() {
	const problem: Problem = {
		requireSubmission: true,
		problem: { file: path.join(__dirname, "problem.{lang}.md") },
		verify: function(_, cb) {
			checkAll(
				[
					fileCheck("index.ts"),
					validateTypescriptFile("index.ts", "tsconfig.json"),
				],
				cb,
			);
		},
	};

	return problem;
};
