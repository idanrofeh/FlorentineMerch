export function PrintTypeSelect({ side, handlePrintChange, preview }) {
  return (
    <label className="print-type">
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
  );
}
