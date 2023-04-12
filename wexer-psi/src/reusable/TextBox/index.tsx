import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

type PropsType = {
    value: string;
    value: () => string;
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
