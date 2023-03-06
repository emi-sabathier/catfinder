const ERROR_NAME = 'SchemaValidationError';

export class SchemaValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = ERROR_NAME;
    }
}
