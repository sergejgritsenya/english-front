import axios, { AxiosInstance } from "axios"

export class AxiosService {
  private axios: AxiosInstance
  private static instance: AxiosService

  private constructor() {
    this.axios = axios.create({
      baseURL: `http://localhost:4000`,
    })
  }

  public static init(): AxiosService {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService()
    }
    return AxiosService.instance
  }

  public async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url)
    return data
  }
}
