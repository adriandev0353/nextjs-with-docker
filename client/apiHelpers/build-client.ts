import axios from 'axios'
import { type NextPageContext } from 'next'

const buildClient = ({ req }: NextPageContext) => {
  // determine if the call is happening on browser or server
  if (typeof window === 'undefined') {
    const ingress = process.env.INGRESS_HOST

    return axios.create({
      baseURL: ingress,
      headers: req!.headers,
    })
  }

  return axios.create({
    baseURL: '/', // will use host from browser
  })
}

export { buildClient }
