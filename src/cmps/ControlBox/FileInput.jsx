export function FileInput({ side, handleFileChange, myRef }) {
  return (
    <input
      ref={myRef}
      id="file-upload"
      type="file"
      name={side + "Print"}
      accept="image/png, image/jpg, image/jpeg"
      required
      onChange={(ev) => handleFileChange(ev, side)}
    />
  );
}
