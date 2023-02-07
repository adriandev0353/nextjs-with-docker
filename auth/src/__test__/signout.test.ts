import request from 'supertest'
import { app } from '../app'

describe('signout route', () => {
  it('should not have a cookie after signing out', async () => {
    const response = await request(app)
      .post('/api/users/signup')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .expect(201)
    expect(response.get('set-cookie')).toBeDefined()
    const response2 = await request(app)
      .post('/api/users/signout')
      .send({
        email: 'test@test.com',
        password: 'password',
      })
      .expect(200)
    expect(response2.get('set-cookie')[0]).toEqual(
      'session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly'
    )
  })
})
