import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../config";
import * as uuid from "uuid";
import { useNavigate } from "react-router-dom";
const CreateNews = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      image: "",
      category: "",
      plan: "free",
      content: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.title === "") {
        errors.title = "Please enter the Title";
      }
      if (values.author === "") {
        errors.author = "Please enter the Author";
      }

      if (values.title.length <= 5 || values.title.length > 50) {
        errors.title = " Title should be between 5 to 50";
      }

      if (values.content.length > 250) {
        errors.content = " description should be Less than 250";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        
        const fileType = file.type.split("/")[1];
        
        const fileUrl = `images/${uuid.v4()}.${fileType}`
      
        const signedUrl = await axios.get(
          `${config.api}/file/get-signed-url?filename=${fileUrl}`
        );
        await axios.put(signedUrl.data.url, file, {
          headers: {
            "Content-Type": "image/*",
          },
        });
        console.log({...values,image:fileUrl});
        console.log(signedUrl.data.url);
        await axios.post(`${config.api}/news/create-news`,{...values,image:fileUrl})
        
        navigate("/list-all-news")
      } catch (error) {}
    },
  });

  let fileChange = (file) => {
    console.log(file.target.files[0]);
    setFile(file.target.files[0]);
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

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
                  <label className="form-label">Author</label>
                  <input
                    type="text"
                    className="form-control"
                    name="author"
                    value={formik.values.author}
                    onChange={formik.handleChange}
                  />
                  <span style={{ color: "red" }}>{formik.errors.author}</span>{" "}
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
                    <option value="paid">4</option>{" "}
                    <option value="free">Free</option>
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
                    onChange={fileChange}
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
                  <label className="form-label">Content</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="content"
                    value={formik.values.content}
                    onChange={formik.handleChange}
                  />
                  <span style={{ color: "red" }}>{formik.errors.content}</span>{" "}
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
