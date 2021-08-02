import { env } from '../../env'
import { JIRA_JWT_TOKEN } from '../JiraWrapper/index'
import Axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = Axios.create({
  url: `${env.JIRA_API_URL}/${env.JIRA_API_VERSION}`,
  baseURL: env.JIRA_API_BASE_URL,
  headers: {
    Authorization: JIRA_JWT_TOKEN
  }
})

export const httpPost = (url, data, config?) => instance.post(url, data, config)
export const httpGet = (url, data?) => instance.get(url, data)
export const httpUpdate = (url, data, config?) => instance.patch(url, data, config)
export const httpDelete = (url, config?) => instance.delete(url, config)
