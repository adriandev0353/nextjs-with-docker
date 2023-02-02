import request from 'supertest'
import { app } from '../app'

describe('signup route', () => {
  it('should return a 201 on successful signup', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'test@test.com',
        password: 'password'
      })
      .expect(201)
  })

  it('should return 400 with invalid email', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'testtest.com',
        password: 'password'
      })
      .expect(400)
  })

  it('should return 400 with invalid password', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'test@test.com',
        password: 'pas'
      })
      .expect(400)
  })

  it('should return 400 with missing email and password', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        email: '',
        password: 'password'
      })
      .expect(400)

    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'test@test.com',
        password: ''
      })
      .expect(400)
  })

  it('should not allow duplicate emails', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'test@test.com',
        password: 'password'
      })
      .expect(201)

    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'test@test.com',
        password: 'password'
      })
      .expect(422)
  })

  it('should have a cookie header after successful signup', async () => {
    const response = await request(app)
      .post('/api/users/signup')
      .send({
        email: 'test@test.com',
        password: 'password'
      })
      .expect(201)
    // console.log('resonse.headers', response.headers)
    // console.log('resonse.body', response.body)
    expect(response.get('Set-Cookie')).toBeDefined()
  })
})
