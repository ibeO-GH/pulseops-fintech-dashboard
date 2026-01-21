import { createContext, useContext, useState } from "react";
import type { IntakeData } from "./types";

type IntakeContextType = {
  data: IntakeData;
  step: number;
  next: (values: Partial<IntakeData>) => void;
  back: () => void;
};

const IntakeContext = createContext<IntakeContextType | null>(null);

export function IntakeProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<IntakeData>({});
  const [step, setStep] = useState(1);

  const next = (values: Partial<IntakeData>) => {
    setData((prev) => ({ ...prev, ...values }));
    setStep((s) => s + 1);
  };

  const back = () => {
    setStep((s) => Math.max(1, s - 1));
  };

  return (
    <IntakeContext.Provider value={{ data, step, next, back }}>
      {children}
    </IntakeContext.Provider>
  );
}

export function useIntake() {
  const ctx = useContext(IntakeContext);
  if (!ctx) throw new Error("useIntake must be used within IntakeProvider");
  return ctx;
}
