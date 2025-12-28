import { Container, Card, CardContent, Stepper, Step, StepLabel } from "@mui/material";
import { FormProvider, FormContext } from "./context/FormContext";
import { useContext } from "react";
import PersonalInfoStep from "./steps/PersonalInfo";
import AddressInfoStep from "./steps/AddressInfo";
import ReviewStep from "./steps/Review";
import Success from "./steps/Success";

const steps = ["Personal Info", "Address", "Review"];

function StepRenderer() {
  const context = useContext(FormContext);
  if (!context) return null;

  const { state } = context;

  if (state.isSubmitted) return <Success />;
  if (state.currentStep === 0) return <PersonalInfoStep />;
  if (state.currentStep === 1) return <AddressInfoStep />;
  return <ReviewStep />;
}

export default function App() {
  return (
    <FormProvider>
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Card>
          <CardContent>
            <Stepper activeStep={0} sx={{ mb: 4 }}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <StepRenderer />
          </CardContent>
        </Card>
      </Container>
    </FormProvider>
  );
}
