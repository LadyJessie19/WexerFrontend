import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type PropsComp = {
  title: string;
};

function TextAreaComp({ title }: PropsComp) {
  const [content, setContent] = useState("");

  function handleChange(value: any) {
    setContent(value);
  }

  return (
    <div>
      <div className="textAreaBody mg-bottom">
        <h2>{title}</h2>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleChange}
          placeholder="Digite aqui..."
        />
      </div>
    </div>
  );
}

export default TextAreaComp;
