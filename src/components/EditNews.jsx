import { useFormik } from 'formik';
import React from 'react'

const EditNews = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      category: "",
      plan: "",
      desc: "",
    },
    onSubmit: {},
  });
  return (
    <div>
      <div className="container-fluid ">
      <h1 className="text-center">Edit News</h1>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card border-0 shadow-lg">
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">change Heading</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">change category</label>
                  <input
                    type="text"
                    className="form-control"
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">change Image</label>
                  <input
                    type="file"
                    id="img"
                    className="form-control"
                    name="image"
                    value={formik.values.image}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="plan">
                   change Plan
                  </label>
                  <select
                    name="plan"
                    value={formik.values.plan}
                    onChange={formik.handleChange}
                    className="form-select"
                    required
                  >
                    <option value="country">change Plan..</option>
                    <option value="free">Free</option>
                    <option value="paid">Paid</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label"> change Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="desc"
                    value={formik.values.desc}
                    onChange={formik.handleChange}
                  />
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
    </div>
  )
}

export default EditNews
