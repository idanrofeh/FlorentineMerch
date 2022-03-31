import { ColorBtn } from "./ColorBtn.jsx";

export function ControlBox({
  orderData,
  handleItemChange,
  handleOrderChange,
  handleFileChange,
  handlePrintChange,
  toggleIsFront,
  side,
}) {
  const { numOfItems, canvas, notes, priceForOne } = orderData;

  const changeItemColor = (color) => {
    handleItemChange({ target: { name: "item-color", value: color } });
  };

  const itemColors = [
    "black",
    "green",
    "red",
    "blue",
    "purple",
    "white",
    "grey",
    "pink",
  ];

  return (
    <form className="control-box">
      <div className="file-block">
        <span>:העלה קובץ</span>
        <input
          type="file"
          name="frontPrint"
          accept="image/png, image/jpg, image/jpg"
          required
          onChange={handleFileChange}
        />
      </div>
      <label className="field print-type">
        <select
          name="type"
          value={canvas[side + "Print"].type}
          onChange={(ev) => handlePrintChange(ev, side + "Print")}
        >
          <option value="normal">רגיל</option>
          <option value="big">גדול</option>
          <option value="pocket">כיס</option>
        </select>
        <span>:סוג גלופה</span>
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
      {/* <span>:צבע פריט 🎨</span> */}
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
        onClick={(ev) => {
          ev.preventDefault();
          toggleIsFront();
        }}
      >
        החלף צד 🔄
      </button>
      <textarea
        name="notes"
        className="field notes"
        placeholder="..הכנס הערות להזמנה"
      ></textarea>
    </form>
  );
}
