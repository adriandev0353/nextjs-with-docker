import mongoose from 'mongoose'
import { Password } from '../libs/password'

// An interface describes properties to create a new user
export interface IUserAttrs {
  email: string
  password: string
}
// An interface that describe properties of a User Document (what build will return)
interface IUserDoc extends mongoose.Document {
  email: string
  password: string
}
// An inteface describes the properties what user model has (TS change)
interface IUserModel extends mongoose.Model<IUserDoc> {
  build: (attrs: IUserAttrs) => IUserDoc
}
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      transform (doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.password
        delete ret.__v
      }
    }
  }
)

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'))

    this.set('password', hashed)
  }

  done()
})
const User = mongoose.model<IUserDoc, IUserModel>('User', userSchema)

User.build = (attrs: IUserAttrs) => new User(attrs)

export { User }
