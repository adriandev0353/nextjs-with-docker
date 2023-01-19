import request from 'supertest'
import { app } from '../app'

describe('signin route', () => {
  it('should fail when a email does not exist', async () => {
    return request(app)
      .post('/api/users/signin')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .expect(404)
  })

  it('should fail when incorrect password is provided', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .expect(201)

    await request(app)
      .post('/api/users/signin')
      .send({
        email: 'test@test.com',
        password: 'password1',
      })
      .expect(400)
  })

  it('should set cookie header when valid sign in credentials are provided', async () => {
    await request(app)
      .post('/api/users/signup')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .expect(201)

    const response = await request(app)
      .post('/api/users/signin')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .expect(200)

    expect(response.get('set-cookie')).toBeDefined()
  })
})
