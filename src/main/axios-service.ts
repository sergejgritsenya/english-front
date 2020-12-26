import axios, { AxiosInstance } from "axios"
import { TQuestionItem } from "../types"

class AxiosService {
  axios: AxiosInstance
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

  public async start() {
    const res = await this.axios.get<TQuestionItem[]>("/start")
    return res.data
  }
}

export const useAxios = () => AxiosService.init()
