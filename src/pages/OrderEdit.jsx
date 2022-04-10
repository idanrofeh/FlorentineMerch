import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { updateCart } from "../store/actions/cart-actions.js";

import { imgService } from "../services/img.service.js";
import { utilService } from "../services/util.service.js";

import { ProductPreview } from "../cmps/ProductPreview.jsx";
import { ControlBox } from "../cmps/ControlBox/ControlBox.jsx";
import { ItemsEdit } from "../cmps/items-edit/ItemsEdit.jsx";

function _OrderEdit({ cart, updateCart }) {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");

  const blankItem = {
    itemColor: "black",
    size: "M",
    amount: 20,
    itemType: "short",
  };

  const newPreview = {
    priceForOne: 40,
    itemColor: "black",
    itemType: "short",
  };

  const [preview, setPreview] = useState(null);
  const [items, setItems] = useState([]);
  const [isFront, setIsFront] = useState(true);
  const [isPrintEdit, setIsPrintEdit] = useState(true);
  const [print, setPrint] = useState({
    frontPrint: { type: "normal" },
    backPrint: { type: "normal" },
  });

  useEffect(() => {
    const orderToSet = cart.find((order) => order.id === orderId);
    if (orderToSet) {
      setOrderToUpdate(orderToSet);
      setIsPrintEdit(false);
    } else {
      setPreview(newPreview);
    }
  }, []);

  const setOrderToUpdate = (order) => {
    let { backPrint, frontPrint } = order;
    if (!backPrint) backPrint = { type: "normal" };
    if (!frontPrint) frontPrint = { type: "normal" };
    setItems(order.items);
    setPreview({ ...newPreview, backPrint, frontPrint });
  };

  const handlePreviewChange = ({ target }) => {
    const { name } = target;
    let { value } = target;
    if (target.type === "number") value = +value;
    const updatedPreview = { ...preview, [name]: value };
    setPreview(updatedPreview);
  };

  const handleFileChange = async ({ target }, side) => {
    const { files } = target;
    const file = files[files.length - 1];
    const { url } = await imgService.uploadPrint(file);
    let currPrint = { ...print[side + "Print"], url };
    const dimensions = await getPrintDimensions(
      currPrint.type,
      url,
      preview.itemType
    );
    const { height, width } = dimensions;
    currPrint = { ...currPrint, height, width };
    setPrint({ ...print, [side + "Print"]: currPrint });
  };

  const handlePrintChange = async ({ target }, side) => {
    const { name, value } = target;
    let newCurrPrint;
    if (name === "type") {
      const { height, width } = await getPrintDimensions(
        value,
        print[side].url,
        preview.itemType
      );
      newCurrPrint = { ...print[side], [name]: value, height, width };
    } else {
      newCurrPrint = { ...print[side], [name]: value };
    }
    const newPrint = { ...print, [side]: newCurrPrint };
    setPrint(newPrint);
  };

  const getPrintDimensions = async (printType, url, itemType) => {
    const dimensions = await imgService.getImgDimensions(
      url,
      printType,
      itemType
    );
    return dimensions;
  };

  const handleItemsChange = ({ target }) => {
    const { name, id } = target;
    let { value } = target;
    if (target.type === "number") value = +value;
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, [name]: value } : item
    );
    setItems(updatedItems);
  };

  const removeFile = () => {
    const currPrint = side === "front" ? "frontPrint" : "backPrint";
    const newPrint = { type: "normal" };
    setPrint({ ...print, [currPrint]: newPrint });
  };

  const changeFunctions = {
    handlePreviewChange,
    handlePrintChange,
    handleFileChange,
    removeFile,
  };

  const addItem = () => {
    const newItem = { ...blankItem, id: utilService.makeId() };
    let updatedItems = [...items];
    updatedItems.push(newItem);
    setItems(updatedItems);
  };

  const deleteItem = ({ target }) => {
    const { id } = target;
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const addItemFromPreview = () => {
    const { itemColor, itemType } = preview;
    const newItem = {
      ...blankItem,
      itemColor,
      itemType,
      id: utilService.makeId(),
    };
    let newItems = [...items];
    newItems.push(newItem);
    setItems(newItems);
  };

  const addToCart = () => {
    let newOrder = getOrderForCart();
    let newCart = [...cart];
    if (orderId) {
      newOrder.id = orderId;
      newCart = newCart.map((order) => {
        return order.id !== orderId ? order : newOrder;
      });
    } else {
      newOrder.id = utilService.makeId();
      newCart.push(newOrder);
    }
    updateCart(newCart);
    navigate("/cart");
  };

  const getOrderForCart = () => {
    const { backPrint, frontPrint } = preview;
    let newOrder = {
      items,
    };
    if (backPrint.url) newOrder.backPrint = backPrint;
    if (frontPrint.url) newOrder.frontPrint = frontPrint;
    return newOrder;
  };

  const toggleIsFront = () => {
    setIsFront(!isFront);
  };

  if (!preview) return <div className="black">Loading..</div>;
  const side = isFront ? "front" : "back";
  return (
    <section className="order-edit page">
      {isPrintEdit && (
        <div className={(side === "front" ? "" : "rotated") + " order-editor"}>
          <ProductPreview side={side} preview={preview} print={print} />
          <ControlBox
            side={side}
            preview={preview}
            print={print}
            changeFunctions={changeFunctions}
            toggleIsFront={toggleIsFront}
            setIsPrintEdit={setIsPrintEdit}
            addItemFromPreview={addItemFromPreview}
          />
        </div>
      )}
      {!isPrintEdit && (
        <ItemsEdit
          handleItemsChange={handleItemsChange}
          items={items}
          addItem={addItem}
          setIsPrintEdit={setIsPrintEdit}
          deleteItem={deleteItem}
          addToCart={addToCart}
          print={print}
        />
      )}
    </section>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cartModule.cart,
  };
}

const mapDispatchToProps = {
  updateCart,
};

export const OrderEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(_OrderEdit);
