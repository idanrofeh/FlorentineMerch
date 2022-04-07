import { ColorBtn } from "./ColorBtn.jsx";

import { itemData } from "../../data/item.js";

export function ItemColorList({ changeItemColor }) {
  const itemColors = itemData.colors;
  return (
    <section className="item-color-list">
      {itemColors.map((color) => (
        <ColorBtn key={color} color={color} changeItemColor={changeItemColor} />
      ))}
    </section>
  );
}
