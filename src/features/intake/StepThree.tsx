import { useIntake } from "./IntakeProvider";
import { useNotifications } from "../../features/notifications/NotificationsProvider";

export default function StepThree() {
  const { data, back } = useIntake();
  const { addNotification } = useNotifications();

  const handleSubmit = () => {
    addNotification(
      "New intake submitted",
      `Submitted by ${data.fullName || "a user"}`
    );

    alert("Intake submitted successfully!");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Review</h2>

      <pre className="bg-gray-100 p-4 rounded text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>

      <div className="bg-gray-50 border rounded p-4 space-y-2 text-sm">
        <div>
          <strong>Name:</strong> {data.fullName}
        </div>
        <div>
          <strong>Email:</strong> {data.email}
        </div>
        <div>
          <strong>Role:</strong> {data.role}
        </div>
        <div>
          <strong>Team Size:</strong> {data.teamSize}
        </div>
        <div>
          <strong>Industry:</strong> {data.industry}
        </div>
      </div>

      <div className="flex justify-between">
        <button onClick={back} className="px-4 py-2 border rounded">
          Back
        </button>

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
