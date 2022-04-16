import { hebService } from "../../services/heb.service.js";
import { itemData } from "../../data/item";

export function Item({
  id,
  item,
  handleItemsChange,
  deleteItem,
  setIsPreview,
  setPreview,
  previewId,
  itemsLength,
}) {
  const sizes = ["S", "M", "L"];
  const types = ["short", "hoodieNoZip", "hoodie"];
  const itemColors = itemData.colors;
  const selectedClass = item.id === previewId ? "selected" : "";
  return (
    <section
      className={"item " + selectedClass}
      onClick={() => {
        setPreview({ ...item });
      }}
    >
      <label>
        <input
          className="num"
          type="number"
          min="20"
          name="amount"
          id={id}
          onChange={handleItemsChange}
          value={item.amount}
        ></input>
        <span>:כמות</span>
      </label>
      <label>
        <select
          id={id}
          name="size"
          className="sizes"
          onChange={handleItemsChange}
          placeholder="בחר מידה"
          value={item.size}
        >
          {sizes.map((size) => {
            return (
              <option key={size} value={size}>
                {size}
              </option>
            );
          })}
        </select>
        <span>:מידה</span>
      </label>
      <label>
        <select
          id={id}
          name="itemType"
          className="types"
          onChange={handleItemsChange}
          value={item.itemType}
        >
          {types.map((type) => {
            return (
              <option key={type} value={type}>
                {hebService.getItemType(type)}
              </option>
            );
          })}
        </select>
        <span>:סוג פריט</span>
      </label>
      <label>
        <select
          id={id}
          name="itemColor"
          className="colors"
          onChange={handleItemsChange}
          value={`${item.itemColor}`}
          style={{ backgroundColor: item.itemColor }}
        >
          {itemColors.map((color) => {
            return (
              <option
                key={color}
                style={{ backgroundColor: color }}
                value={color}
              ></option>
            );
          })}
        </select>
        <span> :צבע פריט</span>
      </label>
      {Boolean(itemsLength > 1) && (
        <button
          className="remove"
          id={id}
          onClick={(ev) => {
            ev.preventDefault();
            deleteItem(ev);
          }}
        >
          X
        </button>
      )}
    </section>
  );
}
