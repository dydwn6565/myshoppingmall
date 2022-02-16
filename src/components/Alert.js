import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function DescriptionAlerts(message) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {console.log(message)}
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <div>{message.error}</div>
      </Alert>
    </Stack>
  );
}
