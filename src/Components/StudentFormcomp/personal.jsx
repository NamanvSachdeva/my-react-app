import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import NextBtn from "../buttons/next";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .regex(
      /^\d{10}$/,
      "Phone number must be exactly 10 digits"
    ),

  dateOfBirth: z.iso.date(
    "Please enter a valid date of birth"
  ),

  gender: z.enum(
    ["male", "female", "other"],
    {
      errorMap: () => ({
        message: "Please select a gender",
      }),
    }
  ),
});

const fields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter email",
  },
  {
    name: "phone",
    label: "Phone No.",
    type: "text",
    placeholder: "Enter phone number",
  },
  {
    name: "dateOfBirth",
    label: "Date Of Birth",
    type: "date",
    placeholder: "",
  },
];

export default function PersonalForm({ student, setStudent }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),

    defaultValues: {
      name: student.personalInfo.name || "",
      email: student.personalInfo.email || "",
      phone: student.personalInfo.phone || "",
      dateOfBirth: student.personalInfo.dateOfBirth || "",
      gender: student.personalInfo.gender || "",
    },
  });

  const onSubmit = (data) => {
    setStudent((prev) => ({
      ...prev,

      personalInfo: {
        ...prev.personalInfo,
        ...data,
      },
    }));

    console.log("Personal information:", data);
  };

  return (
    <div className="mt-4 rounded-3xl border border-gray-200 bg-orange-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 px-6 py-5"
      >
        {fields.map((field) => (
          <div key={field.name}>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              {field.label}
            </label>

            <input
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name)}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-800 outline-none transition focus:border-orange-400 focus:bg-orange-50"
            />

            {errors[field.name] && (
              <p className="mt-1 text-sm font-medium text-red-500">
                {errors[field.name].message}
              </p>
            )}
          </div>
        ))}

        <div>
          <label className="mb-1 block text-sm font-semibold text-gray-700">
            Gender
          </label>

          <select
            {...register("gender")}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-800 outline-none transition focus:border-orange-400 focus:bg-orange-50"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          {errors.gender && (
            <p className="mt-1 text-sm font-medium text-red-500">
              {errors.gender.message}
            </p>
          )}
        </div>

        <NextBtn disabled={isSubmitting} />
      </form>
    </div>
  );
}