const ERROR_NAME = 'InternalServerError';

export class InternalServerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = ERROR_NAME;
    }
}
