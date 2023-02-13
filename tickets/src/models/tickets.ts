import mongoose from 'mongoose'

type Ticket = [number, number, number, number, number, number]

// An interface describes properties to create a new user
export interface ITicketAttrs {
  group_id: string
  user_id: string
  lottery_date: string
  picked_numbers: Ticket[]
}

// An interface that describe properties of a User Document (what build will return)
export interface ITicketDoc extends mongoose.Document {
  group_id: string
  user_id: string
  lottery_date: string
  picked_numbers: Ticket[]
}

// An inteface describes the properties what user model has (TS change)
interface ITicketModel extends mongoose.Model<ITicketDoc> {
  build: (attrs: ITicketAttrs) => ITicketDoc
}

const ticketSchema = new mongoose.Schema(
  {
    group_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    lottery_date: {
      type: String,
      required: true,
    },
    picked_numbers: [
      [
        {
          type: Number,
          required: true
        }
      ],
      {
        validate: [(arr: Array<number>) => arr.length === 6, 'picked_numbers must have 6 numbers']
      }
    ]
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.password
        delete ret.__v
      },
    },
  }
)
const Ticket = mongoose.model<ITicketDoc, ITicketModel>('Ticket', ticketSchema)

Ticket.build = (attrs: ITicketAttrs) => new Ticket(attrs)

export { Ticket }
