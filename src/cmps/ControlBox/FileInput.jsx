export function FileInput({ myRef, handleFileChange, side }) {
  return (
    <input
      ref={myRef}
      id={"file-upload " + side}
      type="file"
      name={side + "Print"}
      accept="image/png, image/jpg, image/jpeg"
      required
      onChange={(ev) => handleFileChange(ev, side)}
    />
  );
}
