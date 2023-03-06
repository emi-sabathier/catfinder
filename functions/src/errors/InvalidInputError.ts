const ERROR_NAME = 'InvalidInputError';

export class InvalidInputError extends Error {
    constructor(message: string) {
        super(message);
        this.name = ERROR_NAME;
    }
}
