import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
const EditPost = () => {
  const params = useParams();
  const [form, setForm] = useState({
    title: "",
    summary: "",
  });
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [cover, setCover] = useState("");
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

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `http://localhost:8000/v1/post/${params._id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        // setPost(result.data);
        setForm({
          ...form,
          title: result.data.title,
          summary: result.data.summary,
        });
        setContent(result.data.content);
      }
    };
    fetchPost();
  }, [params._id]);

  const updateHandler = async (e) => {
    e.preventDefault();
    console.log("dd");
    const data = new FormData();
    data.set("title", form.title);
    data.set("summary", form.summary);
    data.set("content", content);
    data.set("id", params._id);
    if (file?.[0]) {
      data.set("file", file?.[0]);
    }
    const response = await fetch(
      `http://localhost:8000/v1/post-edit/${params._id}`,
      {
        method: "PUT",
        body: data,
        credentials: "include",
      }
    );
    if (response.ok) {
      console.log("okok");
    }
    // navigate to homepage or the updated post after an alert
  };

  return (
    <form onSubmit={updateHandler}>
      <label htmlFor="title">Title:</label>
      <input
        name="title"
        type="text"
        placeholder="enter title"
        onChange={handleChange}
        value={form.title}
      />
      <label htmlFor="summary">Summary:</label>
      <input
        name="summary"
        type="text"
        placeholder="enter summary of content"
        onChange={handleChange}
        value={form.summary}
      />
      <input type="file" onChange={(e) => setFile(e.target.files)} />
      <ReactQuill
        value={content}
        onChange={(newVal) => setContent(newVal)}
        modules={modules}
        formats={formats}
      />
      <button type="submit">Update Post</button>
    </form>
  );
};

export default EditPost;
