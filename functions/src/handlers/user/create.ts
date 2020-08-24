import * as functions from 'firebase-functions'
import { CreateUser, initialUser, createDocument } from '../../entities'
import * as admin from 'firebase-admin'

export const createUserCalalble = functions.https.onCall(async data => {
  const uid = data?.uid
  if (!uid) {
    throw new Error('not found uid')
  }

  const db = admin.firestore()

  const userRef = db.collection('users').doc(uid)
  const userSnapshot = await userRef.get()
  if (userSnapshot.exists) {
    return { message: `already create ${uid} user` }
  }

  const newUser = initialUser({ uid, name: '' })

  const batch = db.batch()

  batch.set(userRef, createDocument<CreateUser>(newUser))

  await batch.commit()

  const result = {
    documentID: userRef.id,
    path: userRef.path,
    value: newUser
  }

  return { message: 'New User is created successfully', contents: [result] }
})
