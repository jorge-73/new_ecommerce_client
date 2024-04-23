const AdminForm = () => {
  return (
    <div className="flex justify-center py-10">
      <form className="py-10 px-20 bg-neutral glass rounded-lg">
        <h2 className="text-2xl text-white text-center mb-3">Product Upload Form</h2>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Title</span>
          </div>
          <input
            type="text"
            placeholder="enter the title"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Description</span>
          </div>
          <input
            type="text"
            placeholder="enter the description"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Price</span>
          </div>
          <input
            type="number"
            step={"0.01"}
            placeholder="enter the price"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Thumbnail</span>
          </div>
          <input type="hidden" name="fileType" value={"product"} />
          <input
            type="file"
            name="files"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Code</span>
          </div>
          <input
            type="text"
            placeholder="enter the code"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Category</span>
          </div>
          <input
            type="text"
            placeholder="enter the category"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Stock</span>
          </div>
          <input
            type="number"
            placeholder="enter the stock"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <button className="btn btn-primary mt-3 block mx-auto">Save Product</button>
      </form>
    </div>
  );
};

export default AdminForm;
