import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { updateCart } from "../store/actions/cart-actions.js";

import { imgService } from "../services/img.service.js";
import { utilService } from "../services/util.service.js";

import { Canvas } from "../cmps/Canvas.jsx";
import { ControlBox } from "../cmps/ControlBox/ControlBox.jsx";
import { ItemsEdit } from "../cmps/items-edit/ItemsEdit.jsx";

function _OrderEdit({ cart, updateCart }) {
  let navigate = useNavigate();

  const newPreview = {
    priceForOne: 40,
    frontPrint: { type: "normal" },
    backPrint: { type: "normal" },
    "item-color": "black",
    item: "short",
  };

  const newItem = {
    color: "black",
    size: "M",
    amount: 20,
    type: "short",
  };

  const [preview, setPreview] = useState(null);
  const [items, setItems] = useState(null);
  const [isFront, setIsFront] = useState(true);
  const [isPrintEdit, setIsPrintEdit] = useState(true);

  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    const orderToSet = cart.find((order) => order.id === orderId);
    if (orderToSet) {
      setOrderToUpdate(orderToSet);
    } else {
      setPreview(newPreview);
      setItems([{ ...newItem, id: utilService.makeId() }]);
    }
  }, []);

  const setOrderToUpdate = (order) => {
    let { backPrint } = order;
    let { frontPrint } = order;
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
    const print = files[files.length - 1];
    const { url } = await imgService.uploadPrint(print);
    const currPrint = { ...preview[side + "Print"], url };
    setPreview({ ...preview, [side + "Print"]: currPrint });
  };

  const handlePrintChange = ({ target }, side) => {
    const { name, value } = target;
    const currPrint = { ...preview[side], [name]: value };
    const newPreview = { ...preview, [side]: currPrint };
    setPreview(newPreview);
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

  const addItem = () => {
    const newItem = { newItem, id: utilService.makeId() };
    let updatedItems = [...items];
    updatedItems.push(newItem);
    setItems(updatedItems);
  };

  const deleteItem = ({ target }) => {
    const { id } = target;
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const addToCart = () => {
    const newOrder = getOrderForCart();
    let newCart = [...cart];
    if (orderId) {
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

  const changeFunctions = {
    handlePreviewChange,
    handlePrintChange,
    handleFileChange,
  };

  const toggleIsFront = () => {
    setIsFront(!isFront);
  };

  if (!preview) return <div className="black">Loading..</div>;
  const side = isFront ? "front" : "back";
  return (
    <section className="home page">
      {isPrintEdit && (
        <div className={(side === "front" ? "" : "rotated") + " order-editor"}>
          <Canvas preview={preview} side={side} />
          <ControlBox
            side={side}
            preview={preview}
            changeFunctions={changeFunctions}
            toggleIsFront={toggleIsFront}
            setIsPrintEdit={setIsPrintEdit}
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
