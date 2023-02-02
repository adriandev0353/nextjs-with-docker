import request from 'supertest'
import { app } from '../app'

describe('current user route', () => {
  it('should repond with details about current user', async () => {
    const cookie = await signin()

    const response = await request(app)
      .get('/api/users/currentuser')
      .send({})
      .set('Cookie', cookie)
      .expect(200)
    expect(response.body.message.split('email:')[1].trim()).toEqual(
      'test@test.com'
    )
  })
  it('should repond with user not signed in', async () => {
    const response = await request(app)
      .get('/api/users/currentuser')
      .send({})
      .expect(200)
    expect(response.body.message).toEqual('')
  })
})
