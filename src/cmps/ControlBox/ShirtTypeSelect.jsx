import { itemData } from "../../data/item.js";
import { hebService } from "../../services/heb.service.js";

export function ItemTypeSelect({ handlePreviewChange, itemType }) {
  const itemTypes = itemData.types;
  return (
    <label className="item-type-select">
      <select name="itemType" value={itemType} onChange={handlePreviewChange}>
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
  );
}
