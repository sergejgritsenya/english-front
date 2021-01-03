import { Instance, types } from "mobx-state-tree"
import { TSettingsRequest } from "../api"
import { ESettingLanguage } from "../enums"

export const SettingsModel = types
  .model({
    size: 25,
    language: ESettingLanguage.mixed,
  })
  .actions((self) => ({
    reset() {
      self.size = 25
      self.language = ESettingLanguage.mixed
    },
    setSize(size: number) {
      self.size = size
    },
    setLanguage(language: ESettingLanguage) {
      self.language = language
    },
  }))
  .views((self) => ({
    get json(): TSettingsRequest {
      return {
        size: self.size,
        language: self.language as ESettingLanguage,
      }
    },
  }))

export interface ISettingsModel extends Instance<typeof SettingsModel> {}
