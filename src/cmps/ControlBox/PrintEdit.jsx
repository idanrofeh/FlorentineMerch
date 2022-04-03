export function PrintEdit({
  handleFileChange,
  handlePrintChange,
  side,
  preview,
}) {
  return (
    <section className="print-edit">
      <div className="file-block">
        <label htmlFor="file-upload" className="custom-file-upload">
          העלה קובץ
        </label>
        {side === "front" && (
          <input
            id="file-upload"
            type="file"
            name={side + "Print"}
            accept="image/png, image/jpg, image/jpg"
            required
            onChange={(ev) => handleFileChange(ev, side)}
          />
        )}
        {side !== "front" && (
          <input
            id="file-upload"
            type="file"
            name={side + "Print"}
            accept="image/png, image/jpg, image/jpg"
            required
            onChange={(ev) => handleFileChange(ev, side)}
          />
        )}
      </div>
      <label className="field print-type">
        <select
          name="type"
          value={preview[side + "Print"].type}
          onChange={(ev) => handlePrintChange(ev, side + "Print")}
        >
          <option value="normal">רגיל</option>
          <option value="big">גדול</option>
          {Boolean(side === "front") && <option value="pocket">כיס</option>}
        </select>
        <span>:סוג הדפסה</span>
      </label>
    </section>
  );
}
