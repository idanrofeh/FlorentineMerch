export function PrintTypeSelect({ side, handlePrintChange, print }) {
  return (
    <label className="print-type">
      <select
        name="type"
        value={print.type || "normal"}
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
