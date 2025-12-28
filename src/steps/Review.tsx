import { Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export default function ReviewStep() {
  const context = useContext(FormContext);
  if (!context) return null;

  const { state, dispatch } = context;
  const { firstName, email, city, state: userState } = state.formData;

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Review</Typography>

      <Typography>Name: {firstName}</Typography>
      <Typography>Email: {email}</Typography>
      <Typography>City: {city}</Typography>
      <Typography>State: {userState}</Typography>

      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
        >
          Back
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={() => dispatch({ type: "SUBMIT_FORM" })}
        >
          Submit
        </Button>
      </Stack>
    </Stack>
  );
}
