import React from "react";

const ViewNews = () => {
  return (
    <div>
      {" "}
      <div className="card mb-3">
        <img src="" className="card-img" />
        <div className="card-body">
          <h5 className="card-title">
            Card title <span class="badge bg-secondary">New</span>
          </h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default ViewNews;
