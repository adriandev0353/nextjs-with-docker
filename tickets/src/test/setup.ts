import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import request from 'supertest'
import { app } from '../app'

/* eslint vars-on-top: 0 */
/* eslint no-var: 0 */
declare global {
  var signin: () => Promise<string[]>
}

let mongo: MongoMemoryServer
beforeAll(async () => {
  process.env.JWT_KEY = 'test'
  mongo = await MongoMemoryServer.create()
  const mongoUri = mongo.getUri()

  await mongoose.connect(mongoUri, {})
})

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections()
  collections.forEach((collection) => {
    collection.deleteMany({})
  })
})

afterAll(async () => {
  await mongoose.connection.close()
  if (mongo) await mongo.stop()
})

global.signin = async () => {
  const email = 'test@test.com'
  const password = 'password'

  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email,
      password,
    })
    .expect(201)

  const cookie = response.get('Set-Cookie')
  return cookie
}
