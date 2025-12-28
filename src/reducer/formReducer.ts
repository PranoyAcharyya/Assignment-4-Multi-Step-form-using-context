import type { FormState } from "../types/form.types";
import type { FormAction } from "../types/action.types";

export const initialFormState: FormState = {
  currentStep: 0,
  formData: {},          // now allowed because Partial<FormData>
  completed: false,
  isSubmitted: false,
};

export function formReducer(
  state: FormState,
  action: FormAction
): FormState {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      };

    default:
      return state;
  }
}
