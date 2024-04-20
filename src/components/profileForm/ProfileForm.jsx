"use client";
import { useForm } from "react-hook-form";
import useUsers from "@/store/UserStore";
import toast from "react-hot-toast";

const ProfileForm = ({ user }) => {
  const { register, setValue, handleSubmit } = useForm();
  const { addFiles, errors } = useUsers();

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("fileType", data.fileType);
    formData.append("files", data.files[0]);
    await addFiles(user?.id, formData);

    if (errors.error) return toast.error(errors.error);

    toast.success("Add profile image successfully");
    setValue("files", "");
  });

  return (
    <div className="flex justify-center">
      <div className="card shadow mt-3 p-3 bg-neutral-content w-2/6">
        <form encType="multipart/form-data" onSubmit={onSubmit}>
          <div className="mb-3 flex items-center justify-evenly">
            <label htmlFor="fileType" className="label">
              Tipo de archivo
            </label>
            <select
              id="fileType"
              name="fileType"
              className="select select-bordered w-full max-w-xs"
              {...register("fileType", { required: true })}
            >
              <option value="profile">Profile Picture</option>
              <option value="document">Document</option>
            </select>
          </div>
          <div className="mb-3 flex items-center justify-evenly">
            <label htmlFor="file" className="label">
              Archivo
            </label>
            <input
              type="file"
              id="file"
              name="files"
              accept=".jpg, .jpeg, .png, .pdf"
              className="file-input file-input-bordered w-full max-w-xs"
              {...register("files", { required: true })}
            />
          </div>
          <button type="submit" className="btn btn-primary block mx-auto">
            Cargar Archivo
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;