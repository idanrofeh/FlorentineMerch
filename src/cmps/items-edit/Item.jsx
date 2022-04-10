import { hebService } from "../../services/heb.service.js";
import { itemData } from "../../data/item";

export function Item({ id, item, handleItemsChange, deleteItem }) {
  const sizes = ["S", "M", "L"];
  const types = ["short", "long", "hoodie"];
  const itemColors = itemData.colors;

  return (
    <section className="item">
      <label>
        <input
          className="num"
          type="number"
          min="1"
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
          name="type"
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
      </label>
      <label>
        <select
          id={id}
          name="color"
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
    </section>
  );
}
