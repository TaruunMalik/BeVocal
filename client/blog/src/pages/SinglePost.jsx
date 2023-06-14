import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext } from "react";
function convertHtmlToText(html) {
  const parser = new DOMParser();
  const parsedDoc = parser.parseFromString(html, "text/html");
  return parsedDoc.body.textContent;
}

const SinglePost = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);

  // const params = useParams();
  // const [post, setPost] = useState([]);
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const response = await fetch(
  //       `http://localhost:8000/v1/post/${params._id}`,
  //       {
  //         method: "GET",
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );
  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log(result);
  //       setPost(result.data);
  //     }
  //   };
  //   fetchPost();
  // }, [params._id]);
  // const textContent = convertHtmlToText(post.content);
  // console.log(userInfo);
  return (
    <>
      {/* <div>
        <img src={"http://localhost:8000/" + post.photo} />
      </div>
      <section>
        {userInfo.id === post.author?._id ? (
          <Link to={`/edit/${post._id}`}>Edit Post</Link>
        ) : (
          ""
        )}
        <h3>{textContent}</h3>
        <p>{post.title}</p>
        <p>{post.author?.username}</p>
        <p>{post.content}</p>
        <time>{new Date(post.createdAt).toLocaleString()}</time>
      </section> */}
      <div className="w-full flex flex-col items-center justify-center gap-4 bg-[#2D2727]">
        <section className="flex justify-center flex-col w-[50%]  text-white ">
          <span className="font-[lora] font-[600] text-[2.5rem] mt-4">
            When the Proud Boys Came to Town
          </span>
          <p className="text-gray-300">
            How a small town in North Carolina celebrated drag in the face of
            extremism
          </p>
        </section>
        <section className="w-[50%] flex items-center gap-4 px-4 text-white font-[Lora]">
          <img
            className="w-[5rem] h-[5rem] object-cover rounded-[50%]"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <span className="underline">Gwen Marwin Stacy,</span>
          <span className="border-r-2 px-2">3 days ago</span>
          <DeleteIcon className="text-gray-400 cursor-pointer" />
          <EditIcon className="text-gray-400 cursor-pointer" />
        </section>
        <section className=" w-[50%] justify-center flex flex-col gap-8 text-lg font-[Playfair] text-white ">
          <img
            className=" object-cover  "
            // src="https://images.unsplash.com/photo-1523906921802-b5d2d899e93b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=353&q=80"
            src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
          <p>
            Masked men are marching up the street. Some cars slow down at the
            spectacle, but others zip away before the children in their back
            seats can see. It’s not exactly the sort of thing you want to run
            into on a sleepy Saturday afternoon in small town Albemarle. Tiffany
            Dahle stands at the front of her business and watches the men swarm
            the sidewalks. She has her cell phone ready in her hand and stays
            close to the restaurant’s entrance. The men make it clear they are
            here for her. They are handing out flyers with her name on them to
            passers by. The people who take the flyers look confused, but most
            move away from the men all together. The men are wearing gaiters,
            sunglasses, and hats to obscure their identity. “It’s just not
            normal to do that,” Tiffany later said about the face masks. “This
            is a friendly town, a family town. It’s like they were hiding, but
            trying to frighten us at the same time.” She wondered if she knew
            any of the men, under those masks. “Are they people who drop their
            kids off at school with me? Will I recognize them if I am in the
            grocery store checkout lane with them?” she wondered. Fortunately,
            Tiffany is not alone. Two of her closest friends had just stopped by
            her bar and stand with her, making her feel safer. Her instinct is
            to call her husband, but she remembers he works the next county over
            and couldn’t make it here fast enough if something happened. She’s
            scared but moreover she’s feeling protective: She’s keenly aware
            that there are children in the restaurant behind her– some are here
            with guests and some are here with their parents who work here. It
            is by pure luck that her own children are not here — for years they
            have come to the bar and done their homework, played games, watched
            TV in the back rooms while Tiffany works. When they were tiny, she
            used to wear them in a papoose while she cooked for customers. Some
            of the children here today are playing a game — she hopes they are
            immersed in it and don’t notice the frightening commotion outside.
            No child should have to see this, she thinks. Tiffany Dahle had no
            idea something like this would happen when she decided to host a
            drag show at Tiffany’s at the Boardroom. It was a business decision,
            something she would try and see how it went. Since the pandemic had
            caused total havoc for small businesses like hers, she has been
            getting creative in rebuilding her clientele and bringing people
            back to downtown. “We had to pivot,” Tiffany explains about her
            business. “We had to become creative.” So when she learned that a
            number of her customers would drive an hour away to the big city of
            Charlotte to attend drag shows, Tiffany thought:” Why should local
            people have to drive and bring their money that far away when we
            could just do that here?” She put up an ad for a drag brunch and the
            event sold out so fast she had to schedule a second show. People
            loved it.
          </p>
        </section>
        <section className="w-[50%] py-5 font-[lora] flex flex-col justify-center items-center gap-4 px-4 bg-[#F0EEED] text-gray-800">
          <img
            className="w-[5rem] h-[5rem] object-cover rounded-[50%]"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <span className=" font-extrabold">Written by: Gwen Marwin Stacy</span>

          <p>A writer, blogger, and a philanthrophist</p>
        </section>
      </div>
    </>
  );
};

export default SinglePost;
