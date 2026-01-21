import { IntakeProvider, useIntake } from "../features/intake/IntakeProvider";
import StepOne from "../features/intake/StepOne";
import StepTwo from "../features/intake/StepTwo";
import StepThree from "../features/intake/StepThree";

function IntakeFlow() {
  const { step, next } = useIntake();

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      {step === 1 && <StepOne onNext={next} />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
    </div>
  );
}

export default function Intake() {
  return (
    <IntakeProvider>
      <IntakeFlow />
    </IntakeProvider>
  );
}
