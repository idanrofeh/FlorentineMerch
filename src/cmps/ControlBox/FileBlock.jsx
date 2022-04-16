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
    removeFile(side);
  };

  return (
    <div className="file-block ">
      <label htmlFor={"file-upload " + side} className="custom-file-upload">
        העלה קובץ
      </label>
      <button onClick={handleRemove}>הסר קובץ</button>
      {side === "front" && (
        <FileInput
          myRef={frontFile}
          side="front"
          handleFileChange={handleFileChange}
        />
      )}
      {side === "back" && (
        <FileInput
          myRef={backFile}
          side="back"
          handleFileChange={handleFileChange}
        />
      )}
    </div>
  );
}
