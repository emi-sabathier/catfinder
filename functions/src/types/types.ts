import * as functions from 'firebase-functions';

// Functions types
export type RequestType = functions.https.Request;
export type ResponseType = functions.Response;

// Models, DTO types
export type BehaviourType = 'calme' | 'démonstratif';
export type HairLossType = 'faible' | 'modérée' | 'importante';
export type FurLengthType = 'court' | 'court à mi-long' | 'mi-long' | 'mi-long à long' | 'long';

// Firetore types

export type DocumentSnapshotType = FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>;
