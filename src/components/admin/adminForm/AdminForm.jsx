"use client";
import { useEffect } from "react";
import useProduct from "@/store/ProductStore";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";

const AdminForm = () => {
  const params = useParams();
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    reset, // Utilizamos reset para reiniciar los valores del formulario
    formState: { errors },
  } = useForm();
  const { createProduct, getProductById, updateProduct } = useProduct();

  useEffect(() => {
    if (params.pid) {
      const getOneProduct = async () => {
        const res = await getProductById(params.pid);
        setValue("title", res.title);
        setValue("description", res.description);
        setValue("price", res.price);
        setValue("code", res.code);
        setValue("category", res.category);
        setValue("stock", res.stock);
      };
      getOneProduct();
    } else {
      // Si no hay params.pid, reiniciamos el formulario
      reset();
    }
  }, [params.pid]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === "files") {
          // Si el campo es de tipo 'files', agregamos cada archivo al FormData
          for (let i = 0; i < data[key].length; i++) {
            formData.append("files", data[key][i]);
          }
        } else {
          // De lo contrario, agregamos los campos normales al FormData
          formData.append(key, data[key]);
        }
      });
      // Enviamos los datos al backend utilizando el FormData
      let res;
      if (params.pid) {
        // Si params.pid existe, estamos editando un producto existente
        res = await updateProduct(params.pid, data);
      } else {
        // Si el parametro no existe, estamos creando un nuevo producto
        res = await createProduct(formData);
      }
      if (res?.error) {
        toast.error(res.error);
      } else {
        // Limpiamos el formulario después de enviar con éxito
        params.pid
          ? toast.success("Product updated successfully!")
          : toast.success("Product created successfully!");
        reset();
        router.push("/admin");
      }
    } catch (error) {
      // Manejar cualquier error de la petición
      console.error(error);
      toast.error("An error occurred while processing the request.");
    }
  });

  return (
    <div className="flex justify-center py-10">
      <form
        className="py-10 px-20 bg-neutral glass rounded-lg"
        onSubmit={onSubmit}
      >
        <h2 className="text-2xl text-white text-center mb-3">
          Product Upload Form
        </h2>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Title</span>
            {errors.title && (
              <span className="label-text text-red-600 font-bold">
                {`Title is required`}
              </span>
            )}
          </div>
          <input
            type="text"
            name="title"
            placeholder="enter the title"
            className={`input input-bordered w-full max-w-xs ${
              errors.title && "border-2 border-error"
            }`}
            {...register("title", { required: true })}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Description</span>
            {errors.description && (
              <span className="label-text text-red-600 font-bold">
                {`Description is required`}
              </span>
            )}
          </div>
          <input
            type="text"
            name="description"
            placeholder="enter the description"
            className={`input input-bordered w-full max-w-xs ${
              errors.description && "border-2 border-error"
            }`}
            {...register("description", { required: true })}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Price</span>
            {errors.price && (
              <span className="label-text text-red-600 font-bold">
                {`Price is required`}
              </span>
            )}
          </div>
          <input
            type="number"
            name="price"
            step={"0.01"}
            placeholder="enter the price"
            className={`input input-bordered w-full max-w-xs ${
              errors.price && "border-2 border-error"
            }`}
            {...register("price", { required: true })}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Thumbnail</span>
          </div>
          <input
            type="hidden"
            name="fileType"
            value={"product"}
            {...register("fileType", { required: true })}
          />
          <input
            type="file"
            name="files"
            className="file-input file-input-bordered w-full max-w-xs"
            {...register("files")}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Code</span>
            {errors.code && (
              <span className="label-text text-red-600 font-bold">
                {`Code is required`}
              </span>
            )}
          </div>
          <input
            type="text"
            name="code"
            placeholder="enter the code"
            className={`input input-bordered w-full max-w-xs ${
              errors.code && "border-2 border-error"
            }`}
            {...register("code", { required: true })}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Category</span>
            {errors.category && (
              <span className="label-text text-red-600 font-bold">
                {`Category is required`}
              </span>
            )}
          </div>
          <input
            type="text"
            name="category"
            placeholder="enter the category"
            className={`input input-bordered w-full max-w-xs ${
              errors.category && "border-2 border-error"
            }`}
            {...register("category", { required: true })}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Stock</span>
            {errors.stock && (
              <span className="label-text text-red-600 font-bold">
                {`Stock is required`}
              </span>
            )}
          </div>
          <input
            type="number"
            name="stock"
            placeholder="enter the stock"
            className={`input input-bordered w-full max-w-xs ${
              errors.stock && "border-2 border-error"
            }`}
            {...register("stock", { required: true })}
          />
        </label>
        {params.pid ? (
          <div className="flex justify-around items-center">
            <button className="btn btn-info mt-3">Edit Product</button>
            <Link href={"/admin"} className="btn btn-error mt-3">
              Cancel
            </Link>
          </div>
        ) : (
          <button className="btn btn-primary mt-3 block mx-auto">
            Save Product
          </button>
        )}
      </form>
    </div>
  );
};

export default AdminForm;
