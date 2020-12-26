import { createMuiTheme, Theme } from "@material-ui/core/styles"

export const green = "#008000"
export const red = "#b22222"

export const getTheme = (): Theme =>
  createMuiTheme({
    palette: {
      primary: {
        main: green,
      },
      secondary: {
        main: red,
      },
    },
  })
