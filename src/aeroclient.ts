import AeroClient from '@aeroware/aeroclient'
import * as AeroClientConfig from '../aeroclient.json'

const client = new AeroClient(AeroClientConfig, {})

client.on('ready', () => {
  console.info(client?.user?.tag)
})

export default client
