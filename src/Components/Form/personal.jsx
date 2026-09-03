import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


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

  fatherName: z
    .string()
    .min(2, "Name must be at least 2 characters"),

    Date_of_birth: z.iso.date("Enter the valid date of birth"),

  age: z.coerce
    .number()
    .max(70, "Please enter a valid age"),

  gender: z.enum(
    ["male", "female", "other"],
    {
      errorMap: () => ({
        message: "Please select a gender",
      }),
    }
  ),

});


export default function PersonalForm() {

  const [steps, setSteps] = useState(1);

  const totalSteps = 2;


  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
    reset,
  } = useForm({

    resolver: zodResolver(formSchema),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      fatherName: "",
      age: "",
      gender: "",
    },

  });


  const onSubmit = (data) => {
    console.log(data);
  };


  return (
<div>
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="mt-2 flex flex-col gap-4"
  >

    {/* Name */}
    <div>
      <label className="mb-1 block text-sm font-semibold text-gray-700">
        Name
      </label>

      <input
        type="text"
        placeholder="Enter name"
        {...register("name")}
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-800 outline-none transition focus:border-orange-400 focus:bg-orange-50"
      />

      {errors.name && (
        <p className="mt-1 text-sm font-medium text-red-500">
          {errors.name.message}
        </p>
      )}
    </div>


    {/* Email */}
    <div>
      <label className="mb-1 block text-sm font-semibold text-gray-700">
        Email
      </label>

      <input
        type="email"
        placeholder="Enter email"
        {...register("email")}
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-800 outline-none transition focus:border-orange-400 focus:bg-orange-50"
      />

      {errors.email && (
        <p className="mt-1 text-sm font-medium text-white">
          {errors.email.message}
        </p>
      )}
    </div>
    <div>
      <label className="mb-1 block text-sm font-semibold text-gray-700">
        Phone No.
      </label>

      <input
        type="text"
        placeholder="Enter Phone No."
        {...register("phone")}
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-800 outline-none transition focus:border-orange-400 focus:bg-orange-50"
      />

      {errors.phone && (
        <p className="mt-1 text-sm font-medium text-white">
          {errors.phone.message}
        </p>
      )}
    </div>
        <div>
      <label className="mb-1 block text-sm font-semibold text-gray-700">
        Father Name
      </label>

      <input
        type="text"
        placeholder="Enter father name"
        {...register("fatherName")}
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-800 outline-none transition focus:border-orange-400 focus:bg-orange-50"
      />

      {errors.fatherName && (
        <p className="mt-1 text-sm font-medium text-white">
          {errors.fatherName.message}
        </p>
      )}
    </div>
    <div>
      <label className="mb-1 block text-sm font-semibold text-gray-700">
        gender
      </label>

      <input
        type="text"
        placeholder="Enter gender"
        {...register("gender")}
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-800 outline-none transition focus:border-orange-400 focus:bg-orange-50"
      />

      {errors.gender && (
        <p className="mt-1 text-sm font-medium text-white">
          {errors.gender.message}
        </p>
      )}
    </div>
    <div>
      <label className="mb-1 block text-sm font-semibold text-gray-700">
        Date Of Birth
      </label>

      <input
        type="text"
        placeholder="YYYY-MM-DY"
        {...register("Date_of_birth")}
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-800 outline-none transition focus:border-orange-400 focus:bg-orange-50"
      />

      {errors.Date_of_birth && (
        <p className="mt-1 text-sm font-medium text-white">
          {errors.Date_of_birth.message}
        </p>
      )}
    </div>
    
    

    {/* Submit */}
    <button
      type="submit"
      className="mt-2 w-full rounded-lg bg-blue-400 px-4 py-2.5 font-semibold text-orange-800  transition hover:bg-blue-600 hover:text-white"
    >
      Submit
    </button>

  </form>
</div>
  );
}
