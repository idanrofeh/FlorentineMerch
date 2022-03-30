import { ColorBtn } from "./ColorBtn.jsx";

export function ControlBox({
  orderData,
  handleCanvasChange,
  handleOrderChange,
  handleFileChange,
  changePrintType,
  toggleIsFront,
}) {
  const { numOfItems, canvas, notes, priceForOne } = orderData;

  const changeItemColor = (color) => {
    handleCanvasChange({ target: { name: "item-color", value: color } });
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
          name="print-type"
          value={canvas.frontPrint.type}
          onChange={changePrintType}
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
        <select name="item" value={canvas.item} onChange={handleCanvasChange}>
          <option value="short">שרוול קצר</option>
          <option value="hoodie">קפוצ'ון</option>
          <option value="long">שרוול ארוך</option>
        </select>
        <span>:סוג פריט</span>
      </label>
      <span>:צבע פריט 🎨</span>
      <div className="item-color field">
        {itemColors.map((color) => (
          <ColorBtn
            key={color}
            color={color}
            changeItemColor={changeItemColor}
          />
        ))}
      </div>
      <textarea
        name="notes"
        className="field notes"
        placeholder="..הכנס הערות להזמנה"
      ></textarea>
    </form>
  );
}
