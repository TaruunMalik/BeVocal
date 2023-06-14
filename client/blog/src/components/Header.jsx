import React from "react";
import "../assets/Header.css";
import VideoBlog from "../assets/blogVideo.mp4";
import { Carousel } from "@material-tailwind/react";
const Header = () => {
  return (
    <>
      <div className=" bg-black p-5 text-white border-b-4 border-t-4 border-t-slate-300 border-b-slate-300">
        <div className="header-container">
          <div className="left-container mr-4 border-r-4">
            <div className="flex flex-col gap-12">
              <span className=" text-[100px] font-[Playfair]">
                Stay Curious.
              </span>
              <p className="text-[20px] font-[Lora]">
                Discover stories, thinking, and expertise from writers on any
                topic.
              </p>
            </div>
            <button className="bg-white text-black hover:text-white hover:bg-black p-4 rounded-2xl font-[Lora]">
              Start Reading
            </button>
          </div>
          <div className="right-container text-center flex items-center justify-center  ">
            <p className="font-[Playfair] text-white text-[50px] underline z-10">
              Thoughts and ideas around the things that actually matter.
            </p>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute right-0 bottom-0 h-full w-full backClip "
            >
              <source src={VideoBlog} type="video/mp4" />
            </video>
          </div>
        </div>
        {/* <section className="text-center text-6xl p-5 mb-10 font-extrabold flex flex-col gap-5">
          <span className="font-[Playfair]">
            Writings from around the world
          </span>
          <p className=" text-sm">Your voice, your words, BeVocal.</p>
        </section> */}
      </div>
      <div className="w-full bg-black text-center p-3 overflow-hidden">
        <span className="font-[Playfair] text-white font-semibold text-[30px]">
          Categories
        </span>
        <div className="rounded-xl flex justify-center items-center gap-8 font-[Poppins] carouselContainer">
          <span className="bg-gray-600 text-white p-4 rounded-full slider-item">
            Science
          </span>
          <span className="bg-gray-600 text-white p-4 rounded-full slider-item">
            Technology
          </span>
          <span className="bg-gray-600 text-white p-4 rounded-full slider-item">
            Programming
          </span>
          <span className="bg-gray-600 text-white p-4 rounded-full slider-item">
            Data Science
          </span>
          <span className="bg-gray-600 text-white p-4 rounded-full slider-item">
            Mental Health
          </span>
          <span className="bg-gray-600 text-white p-4 rounded-full slider-item">
            Fitness
          </span>
          <span className="bg-gray-600 text-white p-4 rounded-full slider-item">
            Productivity
          </span>
          <span className="bg-gray-600 text-white p-4 rounded-full slider-item">
            Leadership
          </span>
          <span className="bg-gray-600 text-white p-4 rounded-full slider-item">
            Journaling
          </span>
          <span className="bg-gray-600 text-white p-4 rounded-full slider-item">
            Media
          </span>
          <span className="bg-gray-600 text-white p-4 rounded-full slider-item">
            Dating
          </span>
          <span className="bg-gray-600 text-white p-4 rounded-full slider-item">
            AI
          </span>
          <span className="bg-gray-600 text-white p-4 rounded-full slider-item">
            Technology
          </span>
          <span className="bg-gray-600 text-white p-4 rounded-full slider-item">
            Business
          </span>
          <span className="bg-gray-600 text-white p-4 rounded-full slider-item">
            Mythology
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
