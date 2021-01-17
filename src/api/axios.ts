import axios, { AxiosInstance } from "axios"

const { REACT_APP_API_URL: BASE_URL } = process.env

class AxiosService {
  private axios: AxiosInstance
  private static instance: AxiosService

  private constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL || `http://localhost:4000`,
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

export const useAxios = () => AxiosService.init()
