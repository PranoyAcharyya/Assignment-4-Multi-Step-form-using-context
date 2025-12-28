import { createContext, useReducer} from "react";
import type { ReactNode } from "react";
import { formReducer, initialFormState } from "../reducer/formReducer";
import type { FormAction } from "../types/action.types";
import type { FormState } from "../types/form.types";

interface ContextType {
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
}

export const FormContext = createContext<ContextType | null>(null);

export function FormProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}
