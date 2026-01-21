import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepOneSchema } from "../../schemas/intakeSchema";
import type { StepOneData } from "../../schemas/intakeSchema";

type Props = {
  onNext: (data: StepOneData) => void;
};

export default function StepOne({ onNext }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StepOneData>({
    resolver: zodResolver(stepOneSchema),
  });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-4 ">
      <h2 className="text-lg font-semibold">Basic Information</h2>

      <div>
        <input
          {...register("fullName")}
          placeholder="Full Name"
          className="w-full border p-2 rounded"
        />
        {errors.fullName && (
          <p className="text-sm text-red-600">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <select {...register("role")} className="w-full border p-2 rounded">
          <option value="">Select role</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="staff">Staff</option>
        </select>
        {errors.role && (
          <p className="text-sm text-red-600">{errors.role.message}</p>
        )}
      </div>

      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Continue
      </button>
    </form>
  );
}
