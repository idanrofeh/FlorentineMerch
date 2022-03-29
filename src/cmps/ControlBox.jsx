export function ControlBox({
  orderData,
  handleCanvasChange,
  handleOrderChange,
  handlePrintChange,
}) {
  const { numOfItems, canvas, notes, priceForOne } = orderData;
  return (
    <form className="control-box">
      <div className="file-block">
        <span>:העלה קובץ</span>
        <input
          type="file"
          name="frontPrint"
          accept="image/png, image/jpg, image/jpg"
          required
          onChange={handlePrintChange}
        />
      </div>
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
      <label className="field item-color">
        <input
          type="color"
          name="item-color"
          value={canvas["item-color"]}
          onChange={handleCanvasChange}
        />
        <span>:צבע פריט 🎨</span>
      </label>
      <textarea
        name="notes"
        className="field notes"
        placeholder="..הכנס הערות להזמנה"
      ></textarea>
    </form>
  );
}
