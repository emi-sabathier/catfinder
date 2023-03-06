import 'dotenv/config';
import * as functions from 'firebase-functions';

export const API_TOKEN = process.env.API_TOKEN;
export const FUNCTIONS_REGION = functions.region('europe-west2');
export const COLLECTION_NAME = 'cats';
