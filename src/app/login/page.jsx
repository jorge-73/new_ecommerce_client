"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import toast from "react-hot-toast";

const LoginPage = () => {
  const { register, setValue, handleSubmit } = useForm();
  const { signIn, isAuthenticated } = useAuth();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn(data);
    if (res?.error) return toast.error(res.error);
    setValue("email", "");
    setValue("password", "");
    toast.success("Welcome.!");
  });

  useEffect(() => {
    if (isAuthenticated) router.push("/products");
  }, [isAuthenticated]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* {authErrors?.error && toast.error(authErrors.error)} */}
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
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <FaKey className="w-4 h-4 opacity-70" />
          <input
            type="password"
            className="grow"
            placeholder="*********"
            {...register("password")}
          />
        </label>
        <button className="btn btn-primary block mx-auto">Login</button>
      </form>
      <div className="w-2/6 flex flex-col items-center">
        <div className="divider divider-neutral mt-3"></div>
        <p className="text-white">
          If you do not have an account
          <Link
            href={"/register"}
            className="text-accent hover:text-success hover:transition-all"
          >
            {" "}
            Register
          </Link>
        </p>
        <div className="divider divider-neutral mt-3"></div>
        <Link
          href={"/passwordChange"}
          className="text-accent hover:text-success hover:transition-all"
        >
          I forgot my password
        </Link>
        <div className="divider divider-neutral mt-3"></div>
      </div>
    </div>
  );
};

export default LoginPage;
