import chalk from "chalk";
import * as path from "path";

export function depedencyCheck(pkgName: string): CheckFunction {
	return function(messages: string[]) {
		try {
			var pkg = require(path.join(process.cwd(), "package.json"));
		} catch (e) {
			messages.push(chalk.red("  - No package.json!!!"));
			return false;
		}

		const dependencies = Object.assign(
			{},
			pkg.dependencies || {},
			pkg.devDependencies || {},
		);

		if (Object.keys(dependencies).indexOf(pkgName) === -1) {
			messages.push(
				"  - Dependency in package.json: " +
					chalk.red(pkgName) +
					" [?]",
			);
			return false;
		}
		messages.push(
			"  - Dependency in package.json: " + chalk.green(pkgName) + " ✔",
		);
		return true;
	};
}
