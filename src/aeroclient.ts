import AereoClient from '@aeroware/aeroclient'
import * as aereoclientConfig from '../aeroclient.json'

const client = new AereoClient(aereoclientConfig, {})

client.on('ready', () => {
  console.info(client?.user?.tag)
})

export default client
