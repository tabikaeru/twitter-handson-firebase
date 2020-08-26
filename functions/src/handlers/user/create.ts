import * as functions from 'firebase-functions'
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
    return { message: `already create user` }
  }
  await userRef.set({ name, uid })

  return { message: 'New User is created successfully' }
})
