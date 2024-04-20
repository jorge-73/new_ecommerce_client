"use client";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";

const PasswordChange = () => {
  const { register, handleSubmit } = useForm();
  const { passwordChange } = useAuth();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (!data.email) return toast.error("email is required");
    try {
      passwordChange(data);
      toast.success("Email sent");

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    }
  });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form className="w-2/6 p-10 glass bg-neutral rounded" onSubmit={onSubmit}>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <MdEmail className="w-4 h-4 opacity-70" />
          <input
            type="text"
            className="grow"
            placeholder="Email"
            {...register("email")}
          />
        </label>
        <button className="btn btn-primary block mx-auto">Send</button>
      </form>
      <div className="w-2/6 flex flex-col items-center">
        <div className="divider divider-neutral mt-3"></div>
        <p className="text-white">
          Write your email to send you the password recovery link
        </p>
        <div className="divider divider-neutral mt-3"></div>
      </div>
    </div>
  );
};

export default PasswordChange;
