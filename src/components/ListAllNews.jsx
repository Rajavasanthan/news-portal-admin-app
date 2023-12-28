import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { config } from "../config";
const ListAllNews = () => {
  const [allNews, setAllNews] = useState([]) // [
  const getAllNews = async () => {
    try {
      const allNewsdata = await axios.get(`${config.api}/news/get-all-news`)
      console.log(allNewsdata.data)
      setAllNews(allNewsdata.data)
    } catch (error) {
      alert("Something went wrong")
    }
  }
  useEffect(() => {
    getAllNews()
  },[])
  return (
    <div className="container-fluid">
      {
        allNews.map((news) => {
          return <div className="card mb-3">
          <img src={`https://zen-class.s3.ap-south-1.amazonaws.com/${news.image}`} className="card-img" />
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
            <Link to="/view-news">
              <p>Read more</p>
            </Link>
          </div>
        </div>
        })
      }
     
     
    </div>
  );
};

export default ListAllNews;
