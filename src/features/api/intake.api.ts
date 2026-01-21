type Intake = {
  id: string;
  createdAt: string;
};

let intakes: Intake[] = [
  {
    id: "1",
    createdAt: new Date().toISOString(),
  },
];

export const intakeApi = {
  async list(): Promise<Intake[]> {
    // simulate network delay
    await new Promise((r) => setTimeout(r, 400));
    return intakes;
  },

  async create(): Promise<void> {
    await new Promise((r) => setTimeout(r, 300));
    intakes.unshift({
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    });
  },
};
