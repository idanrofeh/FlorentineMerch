import { AiOutlinePlus } from "react-icons/ai";

import { Item } from "./Item.jsx";
import { OrderPrint } from "../CartOrder/OrderPrint";
import { EditableOrderPrint } from "../items-edit/EditableOrderPrint.jsx";

export function ItemsEdit({
  handleItemsChange,
  items,
  addItem,
  setIsPreview,
  deleteItem,
  addToCart,
  print,
  setPreview,
  previewId,
  handleFileChange,
  removeFile,
  handlePrintChange,
  getPrintDimensions,
}) {
  return (
    <section className="items-edit">
      <h2>! הוסף את ההדפסה לעוד מוצרים מהקטגוריה</h2>
      <EditableOrderPrint
        backPrint={print.backPrint}
        frontPrint={print.frontPrint}
        handleFileChange={handleFileChange}
        removeFile={removeFile}
        handlePrintChange={handlePrintChange}
        getPrintDimensions={getPrintDimensions}
      />

      {items.map((item) => (
        <Item
          setIsPreview={setIsPreview}
          setPreview={setPreview}
          key={item.id}
          id={item.id}
          item={item}
          handleItemsChange={handleItemsChange}
          deleteItem={deleteItem}
          previewId={previewId}
          itemsLength={items.length}
        />
      ))}
      {items.length < 8 && (
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
      </div>
    </section>
  );
}
