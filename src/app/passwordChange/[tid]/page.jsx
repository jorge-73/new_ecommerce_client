"use client";
import { FaKey } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";
import { useRouter, useParams } from "next/navigation";

const NewPassword = () => {
  const { register, handleSubmit } = useForm();
  const { newPassword, errors: authErrors } = useAuth();
  const router = useRouter();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.tid) {
      if (data.password !== data.confirmPassword)
        return toast.error("Passwords do not match");
      const res = await newPassword(params.tid, data);
      if (res?.error) return toast.error(res.error);
      toast.success("Password Change successfully.!");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
  });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl py-5 text-white">Change Password</h1>
      <form className="w-2/6 p-10 glass bg-neutral rounded" onSubmit={onSubmit}>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <FaKey className="w-4 h-4 opacity-70" />
          <input
            type="password"
            className="grow"
            placeholder="*********"
            {...register("password")}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <FaKey className="w-4 h-4 opacity-70" />
          <input
            type="password"
            className="grow"
            placeholder="Confirm password"
            {...register("confirmPassword")}
          />
        </label>
        <button className="btn btn-primary block mx-auto">Send</button>
      </form>
    </div>
  );
};

export default NewPassword;
