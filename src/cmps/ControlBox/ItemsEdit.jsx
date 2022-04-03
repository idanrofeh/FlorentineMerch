import { Item } from "./Item.jsx";

export function ItemsEdit({
  handleItemsChange,
  items,
  addItem,
  itemColors,
  setIsPrintEdit,
  deleteItem,
}) {
  return (
    <section className="items-edit">
      <h2>:פריטים</h2>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          item={item}
          handleItemsChange={handleItemsChange}
          itemColors={itemColors}
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
          +
        </button>
      )}
      <div className="nav">
        <button
          className="edit-nav-btn left"
          onClick={(ev) => {
            ev.preventDefault();
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
