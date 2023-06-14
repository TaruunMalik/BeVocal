import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import "../assets/Body.css";

const Body = () => {
  const [fix, setFix] = useState(false);
  const [allPosts, setAllPosts] = useState([]);

  const handleScroll = () => {
    if (window.scrollY >= 480) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/v1/get-posts");
        const posts = await response.json();
        setAllPosts(posts);
        console.log(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <div className="body-container">
    //   <div className="blogs-wrapper">
    //     {allPosts.length > 0 &&
    //       allPosts.map((post) => <Blog {...post} key={post._id} />)}
    //     {allPosts.length > 0 && <h1>eee</h1>}
    //   </div>
    //   <div className={!fix ? "categories-wrapper-fixed" : "categories-wrapper"}>
    //     <h4>Categories</h4>
    //     <ul>
    //       <li>Profession</li>
    //       <li>Profession</li>
    //       <li>Profession</li>
    //       <li>Profession</li>
    //       <li>Profession</li>
    //     </ul>
    //   </div>
    // </div>
    <>
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </>
  );
};

export default Body;
