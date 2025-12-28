import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import type { PersonalInfo } from "../types/form.types";

export default function PersonalInfoStep() {
  const context = useContext(FormContext);
  if (!context) return null;

  const { dispatch } = context;

  const { register, handleSubmit, formState } = useForm<PersonalInfo>({
    mode: "onChange",
  });

  const onSubmit = (data: PersonalInfo) => {
    dispatch({ type: "UPDATE_FIELD", payload: data });
    dispatch({ type: "NEXT_STEP" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <TextField label="First Name" {...register("firstName", { required: true })} />
        <TextField label="Email" {...register("email", { required: true })} />

        <Button type="submit" variant="contained" disabled={!formState.isValid}>
          Next
        </Button>
      </Stack>
    </form>
  );
}
