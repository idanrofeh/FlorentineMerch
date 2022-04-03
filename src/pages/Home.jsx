import { useState } from "react";

import { imgService } from "../services/img.service.js";
import { utilService } from "../services/util.service.js";

import { Canvas } from "../cmps/Canvas.jsx";
import { ControlBox } from "../cmps/ControlBox/ControlBox.jsx";
import { ItemsEdit } from "../cmps/ControlBox/ItemsEdit.jsx";

export function Home() {
  const newPreview = {
    priceForOne: 40,
    frontPrint: { type: "normal" },
    backPrint: { type: "normal" },
    "item-color": "black",
    item: "short",
  };

  const itemColors = [
    "black",
    "green",
    "red",
    "blue",
    "purple",
    "white",
    "grey",
    "pink",
    "yellow",
    "orange",
  ];

  const [preview, setPreview] = useState(newPreview);
  const [items, setItems] = useState([
    { color: "black", size: "M", amount: 20, id: "123" },
  ]);
  const [isFront, setIsFront] = useState(true);
  const [isPrintEdit, setIsPrintEdit] = useState(true);

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
    const newItem = { id: utilService.makeId(), amount: 20 };
    let updatedItems = [...items];
    updatedItems.push(newItem);
    setItems(updatedItems);
  };

  const deleteItem = ({ target }) => {
    const { id } = target;
    console.log(id);
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
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
            items={items}
            itemColors={itemColors}
            setIsPrintEdit={setIsPrintEdit}
          />
        </div>
      )}
      {!isPrintEdit && (
        <ItemsEdit
          itemColors={itemColors}
          handleItemsChange={handleItemsChange}
          items={items}
          addItem={addItem}
          setIsPrintEdit={setIsPrintEdit}
          deleteItem={deleteItem}
        />
      )}
    </section>
  );
}
