import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import UserContextProvider from "./UserContext";
import SinglePost from "./pages/SinglePost";
import EditPost from "./pages/EditPost";
function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <Header />
                  <Body />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/post/:_id" element={<SinglePost />} />
            <Route path="/edit/:_id" element={<EditPost />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
