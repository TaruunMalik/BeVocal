import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUserInfo } = useContext(UserContext);
  const [isViewPass, setViewPass] = useState(false);
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setViewPass(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/v1/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    console.log(response);
    if (response.ok) {
      response.json().then((userInfo) => {
        navigate("/");
        // console.log(userInfo);
        setUserInfo(userInfo);
      });
    }
  };

  return (
    <div className="w-full bg-slate-800 h-[86.5vh] flex">
      <div className="flex-1 bg-red-800">Left something</div>

      <form
        onSubmit={submitHandler}
        className="flex-1 text-white bg-[#100F0F] flex justify-center gap-2 items-center flex-col p-10"
      >
        <h1 className=" text-[30px] mb-5 font-[lora] ">
          Welcome Back, Log in to access your account.
        </h1>
        <label
          className="text-left text-lg font-[lora] w-[60%]"
          htmlFor="username"
        >
          Your Username:
        </label>
        <input
          className="w-[60%] p-3 active:border-slate-400 focus:border-slate-400 font-[lora] bg-transparent outline-none border-[2px] border-slate-500 rounded-lg"
          type="text"
          name="username"
          onChange={handleUsername}
        />
        <label
          className=" text-left text-lg font-[lora] w-[60%] mt-4"
          htmlFor="password"
        >
          Your Password:
        </label>
        <section className="w-[60%] flex items-center">
          <input
            className="w-full p-3 active:border-slate-400 focus:border-slate-400 font-[lora] bg-transparent outline-none border-[2px] border-slate-500 rounded-lg"
            type={isViewPass ? "text" : "password"}
            name="password"
            onChange={handlePassword}
          />
          <button
            onClick={() => setViewPass(!isViewPass)}
            className="bg-red-500 rounded-md p-2 ml-3"
          >
            Eye
          </button>
        </section>
        <button
          className="bg-slate-900 mt-3 w-[50%] p-3 font-[lora] text-white rounded-lg"
          type="submit"
        >
          Login
        </button>
        <span className=" font-[lora] mt-1">
          want to start writing?{" "}
          <Link to="/register" className=" underline">
            sign up
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
