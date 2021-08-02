import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const instance: AxiosInstance = Axios.create({})

export const httpPost = (url: string, data?: any, config?: AxiosRequestConfig) => instance.post(url, data, config)
export const httpGet = (url: string, data?: any) => instance.get(url, data)
export const httpUpdate = (url: string, data: any, config?: AxiosRequestConfig) => instance.patch(url, data, config)
export const httpDelete = (url: string, config?: AxiosRequestConfig) => instance.delete(url, config)
