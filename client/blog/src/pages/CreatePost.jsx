import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [form, setForm] = useState({
    title: "",
    summary: "",
  });
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const navHome = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(file);
    console.log(form);
    const data = new FormData();
    data.set("title", form.title);
    data.set("summary", form.summary);
    data.set("content", content);
    data.set("file", file[0]);
    const response = await fetch("http://localhost:8000/v1/create-post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    // console.log(response.json());
    if (response.ok) navHome("/");
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">Title:</label>
      <input
        name="title"
        type="text"
        placeholder="enter title"
        onChange={handleChange}
      />
      <label htmlFor="summary">Summary:</label>
      <input
        name="summary"
        type="text"
        placeholder="enter summary of content"
        onChange={handleChange}
      />
      <input type="file" onChange={(e) => setFile(e.target.files)} />
      <ReactQuill
        value={content}
        onChange={(newVal) => setContent(newVal)}
        modules={modules}
        formats={formats}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
