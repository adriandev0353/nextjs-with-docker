import mongoose from 'mongoose'
import { app } from './app'

async function start() {
  const db = 'tickets'
  const url = `mongodb://tickets-mongo-service:27017/${db}`

  console.log(
    'process.env.KUBERNETES_SERVICE_HOST',
    process.env.KUBERNETES_SERVICE_HOST
  )
  if (process.env.KUBERNETES_SERVICE_HOST) {
    if (!process.env.JWT_KEY) {
      throw new Error('Check Kuberenetes Env keys. Not found error')
    }
  } else {
    console.warn('process.env.JWT_KEY:', process.env.JWT_KEY)
  }

  try {
    await mongoose.connect(url)
    console.log('connected to tickets database')
  } catch (error) {
    console.log('mongo db error:', error)
  }

  app.listen(3200, () => {
    console.log('Ticket Server listening on port 3200')
  })
}

start()
