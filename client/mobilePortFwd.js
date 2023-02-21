/* eslint-disable */
const os = require('os')
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const { log } = require('@sweez/libs')
const app = express()

app.use((req, res, next) => {
  // Allow cross-origin requests
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  // uncomment to trouble shoot mobile requests
  //log('**** mobile req.url:', req.url)
  next()
})

// Forward requests to the Ingress controller
app.use(
  '/',
  createProxyMiddleware({
    target: 'https://grouplottery.com',
    changeOrigin: true,
    secure: false,
  })
)

const port = 2999

app.listen(port, () => {
  // Get the network interfaces for the current device
  const networkInterfaces = os.networkInterfaces()
  // Find the first network interface that is not internal and has an IPv4 address
  const network = Object.values(networkInterfaces)
    .flat()
    .find((iface) => !iface.internal && iface.family === 'IPv4')
  // Get the IPv4 address for the interface
  const ipAddress = network.address

  log(`port forward set for mobile support on ${port}`)
  log(`mobile url: ${ipAddress}:${port}/`)
})
