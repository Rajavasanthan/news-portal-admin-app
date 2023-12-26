import { useFormik } from "formik";
import React from "react";

const EditCategory = () => {
  const formik = useFormik({
    initialValues: {
      category: "",
    },
    onSubmit: {},
  });
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card border-0 shadow-lg">
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="plan">
                   Change category
                  </label>
                  <select
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    className="form-select"
                    required
                  >
                    <option value="country">change category..</option>
                    <option value="free">1</option>
                    <option value="paid">2</option>
                    <option value="free">3</option>
                    <option value="paid">4</option>{" "}
                    <option value="free">5</option>
                    <option value="paid">6</option>
                  </select>
                </div>
                <div className="col-lg-12 mt-4">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value={"submit"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
