import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/v1/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response, username, password);

    if (response.ok === false) {
      alert("hjhjh");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleUserChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
