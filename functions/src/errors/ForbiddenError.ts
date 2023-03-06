const ERROR_NAME = 'Forbidden';

export class ForbiddenError extends Error {
    constructor(message: string) {
        super(message);
        this.name = ERROR_NAME;
    }
}
