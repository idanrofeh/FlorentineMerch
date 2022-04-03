import { ColorBtn } from "./ColorBtn.jsx";

export function PreviewControls({
  changeItemColor,
  itemColors,
  handlePreviewChange,
  preview,
}) {
  return (
    <section className="preview-controls">
      <label className="field shirt-type">
        <select name="item" value={preview.item} onChange={handlePreviewChange}>
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
    </section>
  );
}
