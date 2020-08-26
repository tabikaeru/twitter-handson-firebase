import * as admin from 'firebase-admin'

require('dotenv').config({ path: __dirname + '/../.env' })

if (!process.env.DATABASE_URL) {
  admin.initializeApp()
}

if (process.env.DATABASE_URL) {
  admin.initializeApp({
    credential: admin.credential.cert(__dirname + '/../../google-service-account.json'),
    databaseURL: process.env.DATABASE_URL
  })
}

export { createUser } from './triggers/user/create'
export { createUserCalalble } from './handlers/user/create'
