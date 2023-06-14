import React from "react";
import axios from "axios";

const CreateAi = () => {
  const prompt = "write a short summary on spiderman";
  const handleGenerateText = async () => {
    try {
      const response = await fetch("http://localhost:8000//v1/create-ai", {
        method: "POST",
        body: prompt,
      });
      const generatedText = response.data.generatedText;
      console.log(generatedText);
      // Handle the generated text as needed
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleGenerateText}>Generate Text</button>
    </div>
  );
};

export default CreateAi;
