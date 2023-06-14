import React, { useContext } from "react";
import "../assets/Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [fix, setFix] = useState(false);
  const [viewBur, setViewBur] = useState(false);

  const fixed = () => {
    if (window.scrollY >= 480) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", fixed);

  // const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/profile", {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInf) => {
        // setUsername(userInfo.username);
        setUserInfo(userInf);
      });
    });
  }, []);

  const logoutHandler = () => {
    fetch("http://localhost:8000/v1/logout", {
      credentials: "include",
      method: "POST",
    });
    // setUsername(null);
    setUserInfo(null);
  };
  const username = userInfo?.username;

  return (
    <div
      className={
        !fix
          ? "nav-container  bg-black font-[Playfair] text-lg text-white z-20"
          : "nav-container-fixed bg-[#F0EEED] text-lg font-[Playfair] text-black z-20"
      }
    >
      <div className="logo font-[Playfair] text-[25px]">
        <Link to="/">
          {/* <img src={LogoBe} className="w-[10rem]" /> */}
          <span
            className={
              !fix
                ? "bg-white text-black p-2 rounded-[50%]"
                : "bg-black text-white p-2 rounded-[50%]"
            }
          >
            Be
          </span>
          BeVocal
        </Link>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link className="hover:underline">Contact Us</Link>
        <Link className="hover:underline">Write</Link>
      </div>
      <div className="flex items-center flex-row gap-5">
        {username ? (
          <>
            <span>{username}</span>
            <Link to="/create-post">Create Post</Link>
            <button onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-white text-black p-3 rounded-lg hover:bg-[#3d3d3d] "
            >
              Register
            </Link>
          </>
        )}
        {!viewBur ? (
          <MenuIcon
            onClick={() => setViewBur(!viewBur)}
            className="cursor-pointer hidden"
          />
        ) : (
          <CloseIcon
            onClick={() => setViewBur(!viewBur)}
            className="cursor-pointer hidden"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
