import Snackbar from "@mui/material/Snackbar";
import { Dispatch, forwardRef } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

type ErrorPageProps = {
  message: string;
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};
const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ErrorSnackbar = ({ message, open, setOpen }: ErrorPageProps) => {
  return (
    <Snackbar
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      autoHideDuration={3000}>
      <Alert severity="error">{message}</Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
