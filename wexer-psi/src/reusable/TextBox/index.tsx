import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { Dispatch, SetStateAction } from 'react';

type PropsType = {
    value: string;
    onChange: Dispatch<SetStateAction<string>>;
}

function RichTextBox({value, onChange}:PropsType) {
    return (
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={{ toolbar: true }}
      />
    );
}

export default RichTextBox
