import { ColorBtn } from "./ColorBtn.jsx";

export function ControlForm({
  changeItemColor,
  itemColors,
  orderData,
  changeFunctions,
  toggleIsFront,
  side,
}) {
  const { numOfItems, canvas, notes, priceForOne } = orderData;

  const {
    handleFileChange,
    handleItemChange,
    handleOrderChange,
    handlePrintChange,
  } = changeFunctions;

  const formClass = side === "front" ? "" : " form-rotate";
  return (
    <form className={"control-form" + formClass}>
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
          value={canvas[side + "Print"].type}
          onChange={(ev) => handlePrintChange(ev, side + "Print")}
        >
          <option value="normal">רגיל</option>
          <option value="big">גדול</option>
          {Boolean(side === "front") && <option value="pocket">כיס</option>}
        </select>
        <span>:סוג הדפסה</span>
      </label>
      <label className="field num">
        <input
          type="number"
          name="numOfItems"
          min={1}
          value={numOfItems}
          onChange={handleOrderChange}
        />
        <span>:מספר פריטים</span>
      </label>
      <label className="field shirt-type">
        <select name="item" value={canvas.item} onChange={handleItemChange}>
          <option value="short">שרוול קצר</option>
          <option value="hoodie">קפוצ'ון</option>
          <option value="long">שרוול ארוך</option>
        </select>
        <span>:סוג פריט</span>
      </label>
      <div className="item-color field">
        {itemColors.map((color) => (
          <ColorBtn
            key={color}
            color={color}
            changeItemColor={changeItemColor}
          />
        ))}
      </div>
      <button
        className="side-btn pointer"
        onClick={(ev) => {
          ev.preventDefault();
          toggleIsFront();
        }}
      >
        החלף צד 🔄
      </button>
      <textarea
        name="notes"
        className=" notes"
        placeholder="..הכנס הערות להזמנה"
        onChange={handleOrderChange}
      ></textarea>
    </form>
  );
}
