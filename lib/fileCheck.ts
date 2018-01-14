import chalk from "chalk";
import * as path from "path";
import * as fs from "fs";

export function fileCheck(file: string): CheckFunction {
	return function(messages) {
		try {
			fs.statSync(path.join(process.cwd(), file));
		} catch (err) {
			messages.push("  - " + chalk.red(file) + " [?]");
			return false;
		}
		messages.push("  - " + chalk.green(file) + " ✔");
		return true;
	};
}
