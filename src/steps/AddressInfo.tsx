import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import type { AddressInfo } from "../types/form.types";

export default function AddressInfoStep() {
  const context = useContext(FormContext);
  if (!context) return null;

  const { dispatch } = context;

  const { register, handleSubmit, formState } = useForm<AddressInfo>({
    mode: "onChange",
  });

  const onSubmit = (data: AddressInfo) => {
    dispatch({ type: "UPDATE_FIELD", payload: data });
    dispatch({ type: "NEXT_STEP" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <TextField label="City" {...register("city", { required: true })} />
        <TextField label="State" {...register("state", { required: true })} />

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
          >
            Back
          </Button>

          <Button type="submit" variant="contained" disabled={!formState.isValid}>
            Next
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
