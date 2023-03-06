const ERROR_NAME = 'UnsupportedEventError';

export class UnsupportedEventError extends Error {
    constructor(message: string) {
        super(message);
        this.name = ERROR_NAME;
    }
}
