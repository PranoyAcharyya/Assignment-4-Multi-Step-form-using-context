// src/types/form.types.ts
export interface PersonalInfo {
  firstName?: string;
  email?: string;
}

export interface AddressInfo {
  city?: string;
  state?: string;
}

export interface FormData extends PersonalInfo, AddressInfo {}

export interface FormState {
  currentStep: number;
  formData: Partial<FormData>;  // optional fields
  completed: boolean;
  isSubmitted: boolean;
}
