import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <div className="flex bg-black text-white items-center border-t-2 border-t-slate-500 justify-evenly p-4">
      <div className="font-[Playfair] text-[25px] flex flex-col ">
        <Link to="/">
          <span className="bg-white text-black p-2 rounded-[50%]">Be</span>
          BeVocal
        </Link>
        <p className=" text-xs mt-4">
          BeVocal is a project based on MERN Stack developed by me.
        </p>
      </div>
      <div className="flex  gap-4">
        <a
          href="https://www.linkedin.com/in/taruun-r-malik-7a86a722a/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a>
          <InstagramIcon />
        </a>
        <a>
          <TwitterIcon />
        </a>
      </div>
      <div className="flex gap-2 items-center">
        <EmailIcon /> taruunrmalik09@gmail.com
      </div>
    </div>
  );
};

export default Footer;
