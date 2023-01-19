// this function is not in use at this time

function decodeKubeSecrets(secrets: string[]): void {
  for (let secret of secrets) {
    console.log('SECRET KEY:', secret)
    const aSecret = process.env[secret]
    console.log('Secret unDecoded value:', aSecret)
    if (aSecret) {
      const decoded = Buffer.from(aSecret, 'base64').toString()
      console.log('*Secret Decoded value:', decoded)
      process.env[secret] = decoded
    }
  }
}

export { decodeKubeSecrets }
