import { Button, Grid, makeStyles, TextField } from "@material-ui/core"
import { Observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ESettingLanguage } from "../enums"
import { green } from "../main/theme"
import { ISettingsModel } from "../models/settings.model"

const size_array = [5, 10, 15, 20, 25]

type TQuizSettingsProps = {
  settings: ISettingsModel
}
export const QuizSettings: FC<TQuizSettingsProps> = ({ settings }) => {
  const { btn, container } = useStyles()
  return (
    <Observer>
      {() => (
        <Grid container className={container} justify="space-between">
          <Grid item xs={4}>
            <TextField
              label="Size"
              select
              fullWidth
              value={settings.size}
              onChange={(e) => settings.setSize(Number(e.target.value))}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              {size_array.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Language"
              select
              fullWidth
              value={settings.language}
              onChange={(e) =>
                settings.setLanguage(e.target.value as ESettingLanguage)
              }
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              <option
                key={ESettingLanguage.mixed}
                value={ESettingLanguage.mixed}
              >
                {ESettingLanguage.mixed}
              </option>
              <option
                key={ESettingLanguage.english}
                value={ESettingLanguage.english}
              >
                {ESettingLanguage.english}
              </option>
              <option
                key={ESettingLanguage.russian}
                value={ESettingLanguage.russian}
              >
                {ESettingLanguage.russian}
              </option>
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <Button className={btn} onClick={settings.reset}>
              Reset settings
            </Button>
          </Grid>
        </Grid>
      )}
    </Observer>
  )
}

const useStyles = makeStyles(() => ({
  btn: {
    background: `${green} !important`,
    color: "#fff",
  },
  container: {
    // justify: "space-between",
    alignItems: "center",
  },
}))
