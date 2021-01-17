import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@material-ui/core"
import React, { FC, useState } from "react"

type TFinalDialogProps = {
  reset: () => void
  score: number
  is_mark: boolean
}
export const FinalDialog: FC<TFinalDialogProps> = ({
  reset,
  score,
  is_mark,
}) => {
  const [state, setState] = useState<boolean>(true)
  const onClose = () => {
    setState(false)
  }
  return (
    <Dialog onClose={onClose} open={state}>
      <DialogContent>
        <Typography variant="h6">
          {is_mark ? "Марк ты молодец, твой счет: " : "You score: "}
          <b>{score}</b>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={onClose} variant="contained">
          Close
        </Button>
        <Button color="primary" onClick={reset} variant="contained">
          New test
        </Button>
      </DialogActions>
    </Dialog>
  )
}
