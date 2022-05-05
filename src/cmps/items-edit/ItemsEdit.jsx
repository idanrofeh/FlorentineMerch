import { AiOutlinePlus } from "react-icons/ai";

import { useEffect } from "react";

import { Item } from "./Item.jsx";
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
  const getOrderPrice = () => {
    let orderPrice = 0;
    items.map((item) => {
      orderPrice += (item?.price + print?.price) * item.amount;
    });
    return orderPrice;
  };

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
          key={item?.id}
          id={item?.id}
          item={item}
          handleItemsChange={handleItemsChange}
          deleteItem={deleteItem}
          previewId={previewId}
          itemsLength={items.length}
        />
      ))}
      {items.length < 8 && (
        <div className="right">
          <button
            className="add"
            onClick={(ev) => {
              ev.preventDefault();
              addItem();
            }}
          >
            <AiOutlinePlus />
          </button>
        </div>
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
        <div>
          <span className="price">{getOrderPrice() + "₪"}</span>
        </div>
      </div>
    </section>
  );
}
