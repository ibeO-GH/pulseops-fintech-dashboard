import { useState } from "react";
import { useIntake } from "./IntakeProvider";

export default function StepTwo() {
  const { data, next, back } = useIntake();

  const [teamSize, setTeamSize] = useState(data.teamSize ?? "");
  const [industry, setIndustry] = useState(data.industry ?? "");
  const [error, setError] = useState("");

  function handleNext() {
    if (!teamSize || !industry) {
      setError("Please complete all fields");
      return;
    }

    next({ teamSize, industry });
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Organization Setup</h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Team size</label>
        <select
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="">-- Select --</option>
          <option value="1-5">1–5</option>
          <option value="6-20">6–20</option>
          <option value="21-50">21–50</option>
          <option value="50+">50+</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Industry</label>
        <input
          type="text"
          placeholder="e.g. Fintech, Health, HR"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex justify-between">
        <button onClick={back} className="px-4 py-2 border rounded">
          Back
        </button>

        <button
          onClick={handleNext}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
