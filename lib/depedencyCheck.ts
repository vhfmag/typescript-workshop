import chalk from "chalk";
import * as semver from "semver";
import * as path from "path";

export function dependencyCheck(
	pkgName: string,
	semverRequirement?: string,
): CheckFunction {
	return function(messages: string[]) {
		try {
			var pkg = require(path.join(process.cwd(), "package.json"));
		} catch (e) {
			messages.push(chalk.red("  - {tests.dependency.no_package_json}"));
			return false;
		}

		const dependencies = Object.assign(
			{},
			pkg.dependencies || {},
			pkg.devDependencies || {},
		);

		const pkgVersion = dependencies[pkgName];

		if (!pkgVersion) {
			messages.push(
				"  - {tests.dependency.label}: " +
					chalk.red(pkgName) +
					" [?] ({tests.dependency.missing})",
			);
			return false;
		} else {
			const actualVersion = require(path.join(
				process.cwd(),
				`node_modules/${pkgName}/package.json`,
			)).version;

			if (
				semverRequirement &&
				!semver.satisfies(actualVersion, semverRequirement)
			) {
				messages.push(
					"  - {tests.dependency.label}: " +
						chalk.red(pkgName) +
						` [?] ({tests.dependency.incorrect_version} '${actualVersion}', {tests.dependency.should_satisfy} '${semverRequirement}')`,
				);
				return false;
			}
		}

		messages.push(
			"  - {tests.dependency.label}: " + chalk.green(pkgName) + " ✔",
		);
		return true;
	};
}
