import { ITicketDoc } from '../models/tickets'

interface ITicketWithTicket {
  message: string
  user?: Partial<ITicketDoc>
}

interface ITicketWithError {
  message: string
  error: string[]
}

export type TicketResponse = ITicketWithTicket | ITicketWithError
