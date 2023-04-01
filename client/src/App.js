import { useState, useEffect, useRef } from "react";
import "./App.css";
import { uploadFile } from "./service/api";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
    setIsToggled(true);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1>Simple file sharing!</h1>
        <p>Upload file and share the download link.</p>

        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        {isToggled && (
          <div>
            <h3>Your File is uploaded, Share below link:</h3>
            <a href={result} target="_blank" rel="noreferrer">
              {result}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
