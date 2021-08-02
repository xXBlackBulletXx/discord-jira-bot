import { getAllBoards } from './../JiraWrapper'
import AeroClient from '@aeroware/aeroclient'

export default (client: AeroClient) => {
  client.registerCommand({
    name: 'getAllBoards',
    description: 'get the list of sprints',
    callback: ({ message }) => {
      console.log(getAllBoards())
    }
  })
}
