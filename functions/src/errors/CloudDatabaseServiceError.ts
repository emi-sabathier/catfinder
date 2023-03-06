const ERROR_NAME = 'CloudDatabaseServiceError';

export class CloudDatabaseServiceError extends Error {
    constructor(message: string) {
        super(message);
        this.name = ERROR_NAME;
    }
}
