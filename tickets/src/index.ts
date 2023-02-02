import mongoose from 'mongoose'
import { log } from '@sweez/libs'
import { app } from './app'

async function start() {
  const db = 'tickets'
  const url = `mongodb://tickets-mongo-service:27017/${db}`

  if (process.env.KUBERNETES_SERVICE_HOST) {
    if (!process.env.JWT_KEY) {
      throw new Error('Check Kuberenetes Env keys. Not found error')
    }
  } else if (!process.env.JWT_KEY) {
      log('WARNING: process.env.JWT_KEY:', process.env.JWT_KEY)
    }

  try {
    await mongoose.connect(url)
    log('connected to tickets database')
  } catch (error) {
    log('mongo db error:', error)
  }

  app.listen(3200, () => {
    log('Ticket Server listening on port 3200')
  })
}

start()
