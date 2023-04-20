import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

type ErrorPageProps = {
  message: string;
};

const ErrorSnackbar = ({ message }: ErrorPageProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setOpen(false)}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        message={message}
        action={action}
      />
    </div>
  );
};

export default ErrorSnackbar;
