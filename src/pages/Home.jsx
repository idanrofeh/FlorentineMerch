import { useState, useEffect } from "react";

import { imgService } from "../services/img.service.js";

import { Canvas } from "../cmps/Canvas.jsx";
import { ControlBox } from "../cmps/ControlBox.jsx";

export function Home() {
  const [order, setOrder] = useState(null);
  const [isFront, setIsFront] = useState(true);

  useEffect(() => {
    setOrder(newOrder);
  }, []);

  const newOrder = {
    numOfItems: 20,
    notes: null,
    priceForOne: 40,
    canvas: {
      frontPrint: { type: "normal" },
      backPrint: { type: "normal" },
      "item-color": "black",
      item: "short",
    },
  };

  const handleOrderChange = ({ target }) => {
    const { name } = target;
    let { value } = target;
    if (target.type === "number") value = +value;
    const updatedOrder = { ...order, [name]: value };
    setOrder(updatedOrder);
  };

  const handleItemChange = ({ target }) => {
    const { name, value } = target;
    const updatedCanvas = { ...order.canvas, [name]: value };
    const updatedOrder = { ...order, canvas: updatedCanvas };
    setOrder(updatedOrder);
  };

  const handleFileChange = async ({ target }, side) => {
    console.log("j");
    const { files } = target;
    const [print] = files;
    const { url } = await imgService.uploadPrint(print);
    const currPrint = { ...order.canvas[side + "Print"], url: url };
    const updatedCanvas = { ...order.canvas, [side + "Print"]: currPrint };
    setOrder({ ...order, canvas: updatedCanvas });
  };

  const handlePrintChange = ({ target }, side) => {
    const { name, value } = target;
    const currPrint = { ...order.canvas[side], [name]: value };
    const newCanvas = { ...order.canvas, [side]: currPrint };
    setOrder({ ...order, canvas: newCanvas });
  };

  const changeFunctions = {
    handleOrderChange,
    handlePrintChange,
    handleItemChange,
    handleFileChange,
  };

  const toggleIsFront = () => {
    setIsFront(!isFront);
  };

  if (!order) return <span>Loading..</span>;
  const side = isFront ? "front" : "back";
  return (
    <section className="home page">
      <div className={(side === "front" ? "" : "rotated") + " order-editor"}>
        <Canvas canvasData={order.canvas} side={side} />
        <ControlBox
          side={side}
          orderData={order}
          changeFunctions={changeFunctions}
          toggleIsFront={toggleIsFront}
        />
      </div>
    </section>
  );
}
