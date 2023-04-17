import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextAreaComp() {
  const [content, setContent] = useState('');

  function handleChange(value:any) {
    setContent(value);
  }

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleChange}
        placeholder="Digite aqui..."
      />
    </div>
  );
}

export default TextAreaComp;