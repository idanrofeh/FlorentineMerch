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
    numOfItems: 1,
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

  const handleCanvasChange = ({ target }) => {
    const { name } = target;
    let { value } = target;
    const updatedCanvas = { ...order.canvas, [name]: value };
    const updatedOrder = { ...order, canvas: updatedCanvas };
    setOrder(updatedOrder);
  };

  const handleFileChange = async ({ target }) => {
    const { files } = target;
    const [print] = files;
    const { url } = await imgService.uploadPrint(print);
    const frontPrint = { url, type: "normal" };
    const updatedCanvas = { ...order.canvas, frontPrint };
    setOrder({ ...order, canvas: updatedCanvas });
  };

  const changePrintType = ({ target }) => {
    const { value } = target;
    const frontPrint = { ...order.canvas.frontPrint, type: value };
    const newCanvas = { ...order.canvas, frontPrint };
    setOrder({ ...order, canvas: newCanvas });
  };

  const toggleIsFront = () => {
    setIsFront(!isFront);
  };

  if (!order) return <span>Loading..</span>;
  return (
    <section className="home page">
      <div className="order-container">
        <Canvas canvasData={order.canvas} />
        <ControlBox
          orderData={order}
          handleCanvasChange={handleCanvasChange}
          handleOrderChange={handleOrderChange}
          handleFileChange={handleFileChange}
          toggleIsFront={toggleIsFront}
          changePrintType={changePrintType}
        />
      </div>
    </section>
  );
}
