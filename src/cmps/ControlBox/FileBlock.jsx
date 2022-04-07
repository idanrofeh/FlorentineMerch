import { useRef } from "react";

import { FileInput } from "./FileInput.jsx";

export function FileBlock({ handleFileChange, removeFile, side }) {
  const frontFile = useRef();
  const backFile = useRef();

  const handleRemove = (ev) => {
    ev.preventDefault();
    if (side === "front") {
      frontFile.current.value = "";
    } else {
      backFile.current.value = "";
    }
    removeFile();
  };

  return (
    <div className="file-block">
      <label htmlFor="file-upload" className="custom-file-upload">
        העלה קובץ
      </label>
      <button onClick={handleRemove}>הסר קובץ</button>
      {side === "front" && (
        <FileInput
          myRef={frontFile}
          side={side}
          handleFileChange={handleFileChange}
        />
      )}
      {side !== "front" && (
        <FileInput
          myRef={backFile}
          side={side}
          handleFileChange={handleFileChange}
        />
      )}
    </div>
  );
}
