export abstract class ErrorBase extends Error {
	constructor(baseMessage: string, message: string) {
		super(!message ? baseMessage : `${baseMessage}: ${message}`);
	}
}

export class NotFoundError extends ErrorBase {
	constructor(message?: string) {
		super('Not found', message);
	}
}

export class ValidationError extends ErrorBase {
	constructor(message?: string) {
		super('Validation failed', message);
	}
}
