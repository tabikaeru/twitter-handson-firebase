import { firestore } from 'firebase-admin'

export const createDocument = <T>(document: T) => {
  return {
    ...document,
    createdAt: firestore.FieldValue.serverTimestamp(),
    updatedAt: firestore.FieldValue.serverTimestamp()
  }
}

export const updateDocument = <T>(document: T) => {
  return {
    ...document,
    updatedAt: firestore.FieldValue.serverTimestamp()
  }
}
