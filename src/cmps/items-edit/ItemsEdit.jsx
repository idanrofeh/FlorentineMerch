import { AiOutlinePlus } from "react-icons/ai";

import { Item } from "./Item.jsx";

export function ItemsEdit({
  handleItemsChange,
  items,
  addItem,
  setIsPrintEdit,
  deleteItem,
  addToCart,
}) {
  return (
    <section className="items-edit">
      <h2>!אהבת? הוסף את ההדפסה לעוד מוצרים</h2>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          item={item}
          handleItemsChange={handleItemsChange}
          deleteItem={deleteItem}
        />
      ))}
      {items.length < 12 && (
        <button
          className="add"
          onClick={(ev) => {
            ev.preventDefault();
            addItem();
          }}
        >
          <AiOutlinePlus />
        </button>
      )}
      <div className="nav">
        <button
          className="edit-nav-btn left"
          onClick={(ev) => {
            ev.preventDefault();
            addToCart();
          }}
        >
          🡠 הוסף לעגלה
        </button>
        <button
          className="edit-nav-btn right"
          onClick={(ev) => {
            ev.preventDefault();
            setIsPrintEdit(true);
          }}
        >
          חזור אחורה 🡢
        </button>
      </div>
    </section>
  );
}
