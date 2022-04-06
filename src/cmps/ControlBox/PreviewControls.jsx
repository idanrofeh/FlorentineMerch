import { ColorBtn } from "./ColorBtn.jsx";

import { itemData } from "../../data/item.js";
import { hebService } from "../../services/heb.service.js";

export function PreviewControls({
  changeItemColor,
  handlePreviewChange,
  preview,
}) {
  const itemColors = itemData.colors;
  const itemTypes = itemData.types;
  return (
    <section className="preview-controls">
      <label className="field shirt-type">
        <select name="item" value={preview.item} onChange={handlePreviewChange}>
          {itemTypes.map((type) => {
            return (
              <option key={type} value={type}>
                {hebService.getItemType(type)}
              </option>
            );
          })}
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
