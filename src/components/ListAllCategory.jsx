import React from "react";
import { Link } from "react-router-dom";

const ListAllCategory = () => {
  return (
    <div className="container-fluid">
      <div>
        <ul class="nav nav-pills nav-fill mt-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              1
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              2
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              3
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">
              4
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">
              5
            </a>
          </li>{" "}
          <li class="nav-item">
            <a class="nav-link " href="#">
              6
            </a>
          </li>{" "}
          <li class="nav-item">
            <a class="nav-link " href="#">
              7
            </a>
          </li>
        </ul>
      </div>
      <div className="card mb-3 mt-2">
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

export default ListAllCategory;
