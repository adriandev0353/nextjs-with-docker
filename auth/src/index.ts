import mongoose from 'mongoose'
import { app } from './app'

async function start() {
  const db = 'auth'
  const url = `mongodb://auth-mongo-service:27017/${db}`

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
    console.log('connected to auth database')
  } catch (error) {
    console.log('mongo db error:', error)
  }

  app.listen(3100, () => {
    console.log('Auth Server listening on port 3100')
  })
}

start()
