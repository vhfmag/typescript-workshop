declare type CheckFunction = (messages: string[]) => boolean;

declare type ProblemCallback = (
	err: Error | null,
	success: boolean,
	message?: string,
) => void;

declare interface Problem {
	requireSubmission?: boolean;
	problem: {
		file: string;
	};
	verify(args: any[], cb: ProblemCallback): void;
}
