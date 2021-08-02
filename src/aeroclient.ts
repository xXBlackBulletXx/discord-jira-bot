import AereoClient from '@aeroware/aeroclient'
import * as aeroclientConfig from '../aeroclient.json'

console.log(aeroclientConfig)

const client = new AereoClient(aeroclientConfig, {})

client.on('ready', () => {
  console.info(client?.user?.tag)
})

export default client
