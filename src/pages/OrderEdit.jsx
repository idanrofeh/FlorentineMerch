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
  const [items, setItems] = useState([{ ...blankItem, id: "123" }]);
  const [isFront, setIsFront] = useState(true);
  const [isPreview, setIsPreview] = useState(true);
  const [print, setPrint] = useState({
    frontPrint: { type: "normal" },
    backPrint: { type: "normal" },
  });

  // useEffect(() => {
  //   console.log("print", print);
  // }, [print]);

  useEffect(() => {
    if (items.length) {
      const { itemType, itemColor, id } = items[items.length - 1];
      setPreview({ itemColor, itemType, id });
    } else setPreview(newPreview);
  }, [items.length]);

  useEffect(() => {
    const orderToSet = cart.find((order) => order.id === orderId);
    if (orderToSet) {
      setOrderToUpdate(orderToSet);
      setIsPreview(false);
    }
    setPreview({ ...newPreview, id: "123" });
  }, []);

  const setOrderToUpdate = (order) => {
    let { backPrint } = order;
    let { frontPrint } = order;
    if (!backPrint) backPrint = { type: "normal" };
    if (!frontPrint) frontPrint = { type: "normal" };
    setItems(order.items);
    setPrint({ backPrint, frontPrint });
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
    console.log(newPrint);
    setPrint(newPrint);
  };

  const getPrintDimensions = async (
    printType,
    url,
    itemType,
    maxHeight,
    maxWidth
  ) => {
    const dimensions = await imgService.getImgDimensions(
      url,
      printType,
      itemType,
      maxHeight,
      maxWidth
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
    setPreview({ ...preview, [name]: value });
    setItems(updatedItems);
  };

  const removeFile = (side) => {
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
    const { itemColor, itemType, id } = preview;
    let newItem = {
      ...blankItem,
      itemColor,
      itemType,
      id,
    };
    let newItems = [...items];
    if (id) {
      newItems = newItems.map((item) => (item.id === id ? newItem : item));
    } else {
      newItem.id = utilService.makeId();
      newItems.push(newItem);
    }

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
    const { backPrint } = print;
    const { frontPrint } = print;
    let newOrder = {
      items,
    };
    if (backPrint?.url) newOrder.backPrint = backPrint;
    if (frontPrint?.url) newOrder.frontPrint = frontPrint;
    return newOrder;
  };

  const toggleIsFront = () => {
    setIsFront(!isFront);
  };

  if (!preview) return <div className="black">Loading..</div>;
  const side = isFront ? "front" : "back";
  return (
    <section className="order-edit page">
      <ItemsEdit
        getPrintDimensions={getPrintDimensions}
        handleItemsChange={handleItemsChange}
        items={items}
        addItem={addItem}
        setIsPreview={setIsPreview}
        deleteItem={deleteItem}
        addToCart={addToCart}
        print={print}
        setPreview={setPreview}
        previewId={preview.id}
        handleFileChange={handleFileChange}
        removeFile={removeFile}
        handlePrintChange={handlePrintChange}
      />
      <div className={(side === "front" ? "" : "rotated") + " order-editor"}>
        <ProductPreview side={side} preview={preview} print={print} />
        <ControlBox
          items={items}
          side={side}
          preview={preview}
          print={print}
          changeFunctions={changeFunctions}
          toggleIsFront={toggleIsFront}
          setIsPreview={setIsPreview}
          addItemFromPreview={addItemFromPreview}
        />
      </div>
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
