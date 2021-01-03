import { TSettingsRequest } from "./requests"
import { TQuizResponse } from "./responses"

export interface IApiBase {
  start(settings: TSettingsRequest): Promise<TQuizResponse>
}
