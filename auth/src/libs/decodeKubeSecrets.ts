// this function is not in use at this time
function decodeKubeSecrets(secrets: string[]): void {
  secrets.forEach((secret) => {
    const aSecret = process.env[secret]

    if (aSecret) {
      const decoded = Buffer.from(aSecret, 'base64').toString()

      process.env[secret] = decoded
    }
  })
}

export { decodeKubeSecrets }
