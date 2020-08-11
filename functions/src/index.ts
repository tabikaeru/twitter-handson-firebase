import * as admin from 'firebase-admin'

// Sparkプランを使う人
// require('dotenv').config({ path: __dirname + '/../.env' })
// const DATABASE_URL = process.env.DATABASE_URL

// Blazeプランを使う人
admin.initializeApp()

// Sparkプランを使う人
// admin.initializeApp({
//   credential: admin.credential.cert(__dirname + '/../google-service-account.json'),
//   databaseURL: DATABASE_URL
// })

export { createUserByTrigger } from './triggers/user'
export { createUserByHandler } from './handlers/user'
