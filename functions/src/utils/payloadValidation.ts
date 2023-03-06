import Ajv, { ErrorObject } from 'ajv';
import * as fs from 'fs';
import * as path from 'path';
import { SchemaValidationError } from '../errors/SchemaValidationError';
import * as functions from 'firebase-functions';
import { CatEntryModel } from '../models/CatModel';

export const payloadValidation = (entry: CatEntryModel) => {
    try {
        const ajv = new Ajv({ allErrors: true });
        const schemaPath = path.resolve(__dirname, '../api/schemas/catSchema.json');
        const catSchema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

        const validate = ajv.compile(catSchema);
        const isValid = validate(entry);

        if (!isValid) {
            const errors: ErrorObject[] = validate.errors as ErrorObject[];
            const errorsMessage = Object.values(errors)
                .map(error => `${error.instancePath}: ${error.message} `)
                .join(' ');

            return {
                isValid,
                errorsMessage
            };
        }
        return { isValid };
    } catch (error) {
        functions.logger.error('Logger: SchemaValidationError', error);
        throw new SchemaValidationError(error.message);
    }
};
