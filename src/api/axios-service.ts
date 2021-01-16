import axios, { AxiosInstance } from "axios"

export class AxiosService {
  private axios: AxiosInstance
  private static instance: AxiosService

  private constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_PUBLIC_URL || `http://localhost:4000`,
    })
  }

  public static init(): AxiosService {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService()
    }
    return AxiosService.instance
  }

  public async post<T>(url: string, body: any = {}): Promise<T> {
    const { data } = await this.axios.post<T>(url, body)
    return data
  }
}
