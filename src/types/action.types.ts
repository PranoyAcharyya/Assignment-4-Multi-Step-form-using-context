export type FormAction =
  | { type: "NEXT_STEP" }
  | { type: "PREVIOUS_STEP" }
  | { type: "UPDATE_FIELD"; payload: any }
  | { type: "SUBMIT_FORM" };
