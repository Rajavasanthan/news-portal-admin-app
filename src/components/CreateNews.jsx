import { useFormik } from "formik";
import React from "react";

const CreateNews = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      category: "",
      plan: "",
      desc: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.title === "") {
        errors.title = "Please enter the Title";
      }

      if (values.title.length <= 5 || values.title.length > 50) {
        errors.title = " Title should be between 5 to 50";
      }

      if (values.desc.length > 250) {
        errors.desc = " description should be Less than 250";
      }

      return errors;
    },
    onSubmit: {},
  });

  return (
    <div className="container-fluid ">
      <h1 className="text-center">Create News</h1>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card border-0 shadow-lg">
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Heading</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                  />
                  <span style={{ color: "red" }}>{formik.errors.title}</span>{" "}
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="plan">
                  category
                  </label>
                  <select
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    className="form-select"
                    required
                  >
                    <option value="country">Choose category..</option>
                    <option value="free">1</option>
                    <option value="paid">2</option>
                    <option value="free">3</option>
                    <option value="paid">4</option> <option value="free">Free</option>
                    <option value="paid">5</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Upload Image</label>
                  <input
                    type="file"
                    id="img"
                    className="form-control"
                    name="image"
                    value={formik.values.image}
                    onChange={formik.handleChange}
                    validate
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="plan">
                    Plan
                  </label>
                  <select
                    name="plan"
                    value={formik.values.plan}
                    onChange={formik.handleChange}
                    className="form-select"
                    required
                  >
                    <option value="country">Choose Plan..</option>
                    <option value="free">Free</option>
                    <option value="paid">Paid</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="desc"
                    value={formik.values.desc}
                    onChange={formik.handleChange}
                  />
                  <span style={{ color: "red" }}>{formik.errors.desc}</span>{" "}
                </div>
                <div className="col-lg-12 mt-4">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value={"upload"}
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

export default CreateNews;
