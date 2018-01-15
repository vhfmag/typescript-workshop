import chalk from "chalk";
import * as Typescript from "typescript";
import * as path from "path";

function parseConfigFile(configFile: string) {
	return Typescript.convertCompilerOptionsFromJson(
		null,
		path.dirname(configFile),
		path.basename(configFile),
	);
}

function* validateObj<T extends { [key: string]: any }>(
	source: T,
	target: T,
	parentOption?: string,
): IterableIterator<{
	address: string;
	message: string;
}> {
	for (const option in source) {
		const sourceOption = source[option];
		const targetOption = target[option];

		const address = parentOption ? `${parentOption}.${option}` : option;

		const invalidTypeError = {
			address,
			message: `{tests.typescript.invalid_option_type} ({general.expected}: ${typeof sourceOption}, {general.found}: ${typeof targetOption})`,
		};

		if (typeof sourceOption !== typeof targetOption) {
			yield invalidTypeError;
		}

		if (typeof sourceOption === "object") {
			if (Array.isArray(sourceOption)) {
			} else if (sourceOption === null || targetOption === null) {
				if (sourceOption !== targetOption) {
					yield invalidTypeError;
				}
			} else {
				yield* validateObj(sourceOption, targetOption, address);
			}
		}

		if (sourceOption !== targetOption) {
			yield {
				address,
				message: `{tests.typescript.invalid_option_type} ({general.expected}: ${sourceOption}, {general.found}: ${targetOption})`,
			};
		}
	}
}

export function validateCompilerOptions(
	configFile: string,
	compilerOptions: Typescript.CompilerOptions,
): CheckFunction {
	return function(messages) {
		const config: Typescript.CompilerOptions = {
			...Typescript.getDefaultCompilerOptions(),
			...parseConfigFile(configFile).options,
		};

		const errors = Array.from(validateObj(compilerOptions, config));

		if (errors.length === 0) {
			messages.push(
				`\t- ${chalk.green("{tests.typescript.valid_config_file}")} ✔`,
			);
			return true;
		} else {
			messages.push(
				`\t- ${chalk.red(
					"{tests.typescript.invalid_config_file}",
				)} [?]`,
			);

			for (const error of errors) {
				messages.push(`\t\t- ${error.address}: ${error.message}`);
			}

			return false;
		}
	};
}

export function validateTypescriptFile(
	file: string,
	configFile?: string,
): CheckFunction {
	return function(messages) {
		const compilerOptions = configFile
			? parseConfigFile(configFile).options
			: Typescript.getDefaultCompilerOptions();

		const program = Typescript.createProgram([file], compilerOptions);
		const errors = Typescript.getPreEmitDiagnostics(program);

		if (errors.length === 0) {
			messages.push(
				`\t- ${chalk.green("{tests.typescript.valid_file}")} ✔`,
			);
			return true;
		} else {
			messages.push(
				`\t- ${chalk.red("{tests.typescript.invalid_file}")} [?]`,
			);

			for (const error of errors) {
				messages.push(`\t\t- ${error.messageText}`);
			}

			return false;
		}
	};
}
