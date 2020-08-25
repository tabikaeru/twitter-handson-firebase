import * as functions from 'firebase-functions'
import { CreateUser, initialUser, ANONYMOUS_USERNAME, createDocument } from '../../entities'
import * as admin from 'firebase-admin'

export const createUser = functions.auth.user().onCreate(async (user) => {
  const uid = user.uid
  const name = user.displayName ? user.displayName : ANONYMOUS_USERNAME

  if (!uid) {
    throw new Error('not found uid')
  }

  const db = admin.firestore()

  const userRef = db.collection('users').doc(uid)
  const userSnapshot = await userRef.get()
  if (userSnapshot.exists) {
    return { message: `already create ${uid} user` }
  }

  const newUser = initialUser({ uid, name })

  //Lesson2: Firebase Fucntionsでユーザーデータを作成してみよう

  const result = {
    documentID: userRef.id,
    path: userRef.path,
    value: user,
  }

  return { message: 'New User is created successfully', contents: [result] }
})
