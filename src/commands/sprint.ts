import AeroClient from '@aeroware/aeroclient'

export default (client: AeroClient) => {
  client.registerCommand({
    name: 'sprintList',
    description: 'get the list of sprints',
    callback: ({ message }) => {}
  })
}
