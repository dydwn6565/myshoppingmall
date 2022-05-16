import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export function ErrorAlerts(message) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <div>{message}</div>
      </Alert>
    </Stack>
  );
}

export function SuccessAlert(message) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        <div>{message}</div>
      </Alert>
    </Stack>
  );
}
