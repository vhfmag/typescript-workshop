import chalk from "chalk";

export function checkAll(
	checks: CheckFunction[],
	success: string,
	error: string,
	cb: ProblemCallback,
) {
	const messages = ["Checking Requirements:"];
	const total = checks.length;
	let ok = 0;
	messages.push("");
	for (let i = 0; i < checks.length; i++) {
		const check = checks[i];
		ok += check(messages) ? 1 : 0;
	}
	messages.push("");
	if (ok === total) {
		messages.push(chalk.green("{{ee.success}}") + "\n\n" + success);
	} else {
		messages.push(chalk.red("{{ee.fail}}") + "\n\n" + error);
	}
	messages.push("");
	cb(null, ok === total, messages.join("\n"));
}
