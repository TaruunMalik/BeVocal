import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import "../assets/Blog.css";

// function convertHtmlToText(html) {
//   const parser = new DOMParser();
//   const parsedDoc = parser.parseFromString(html, "text/html");
//   return parsedDoc.body.textContent;
// }
// { _id, title, summary, photo, content, createdAt, author }
const Blog = () => {
  // console.log(title, summary, photo, content);
  // console.log(author.username, "ehyy");

  // const textContent = convertHtmlToText(content);

  return (
    // <div className="blog-container">
    //   {/* left */}
    //   <div className="left-blog-container">
    //     <Link to={`/post/${_id}`}>
    //       <p>{title}</p>
    //     </Link>
    //     <h2>{summary}</h2>
    //     <p>{content}</p>
    //     <p>{author.username}</p>
    //     <time>{format(new Date(createdAt), "HH:mm, MMM d, yyyy")}</time>
    //   </div>
    //   {/* right */}
    //   <div className="right-blog-container">
    //     <Link to={`/post/${_id}`}>
    //       <img
    //         src={"http://localhost:8000/" + photo}
    //         style={{ width: "100px" }}
    //         alt={title}
    //       />
    //     </Link>
    //   </div>
    // </div>
    <div className="flex bg-black justify-center blog-container w-full p-5">
      <section className="bg-[#100F0F] text-white w-4/5 h-max flex  p-3 rounded-xl gap-5">
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            className="w-full max-h-[450px]
             object-cover rounded-2xl "
          />
        </div>
        <div className="flex-1 flex flex-col justify-between gap-3 ">
          <section className=" flex flex-col gap-5">
            <Link to="/post/44">
              <h2 className="text-[2.3rem] font-[lora]">
                No One Really Tells You The Hardest Part Of Getting Older
              </h2>
            </Link>
            <p className="text-[1rem] font-[lora] text-gray-400">
              The older I get, the more I realize how much I don’t know. But
              there’s one thing I know for sure.Masked men are marching up the
              street. Some cars slow down at the spectacle, but others zip away
              before the children in their back seats can see. She has her cell
              phone ready in her hand and stays close to the restaurant’s
              entrance. Some cars slow down at the spectacle, but others zip
              away before the children in their back seats can see. She has her
              cell phone ready in her hand and stays close to the restaurant’s
              entrance{" "}
            </p>
          </section>
          <div className="flex flex-row items-center gap-5">
            <img
              className=" w-20 rounded-full h-20 object-cover"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
            />
            <span className="underline font-[lora]">Gwen Marwin Stacy,</span>
            <span className="px-2 font-[lora]">3 days ago</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
