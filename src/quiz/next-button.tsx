import { Button, makeStyles } from "@material-ui/core"
import React, { FC } from "react"
import { green } from "../main/theme"

type TNextButtonProps = {
  next: () => void
}

export const NextButton: FC<TNextButtonProps> = ({ next }) => {
  const { fixed } = useStyles()
  return (
    <Button className={fixed} onClick={next}>
      NEXT
    </Button>
  )
}

const useStyles = makeStyles(() => ({
  fixed: {
    background: `${green} !important`,
    bottom: "24px",
    color: "#fff",
    position: "fixed",
    right: "24px",
    variant: "contained",
    zIndex: 1250,
  },
}))
