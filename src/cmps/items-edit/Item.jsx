import { utilService } from "../../services/util.service";
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
              <option key={utilService.makeId()} value={size}>
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
          value={item.type}
        >
          {types.map((type) => {
            return (
              <option key={utilService.makeId()} value={type}>
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
          value={`${item.color}`}
          style={{ backgroundColor: item.color }}
        >
          {itemColors.map((color) => {
            return (
              <option
                key={utilService.makeId()}
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
