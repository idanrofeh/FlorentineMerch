import { useState, useEffect } from "react";

import { Canvas } from "../cmps/Canvas.jsx";
import { ControlBox } from "../cmps/ControlBox.jsx";

export function Home() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    setOrder(newOrder);
  }, []);

  const newOrder = {
    numOfItems: 1,
    notes: null,
    priceForOne: 40,
    canvas: {
      frontPrint: null,
      backPrint: null,
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
    console.log(updatedCanvas);
    const updatedOrder = { ...order, canvas: updatedCanvas };
    setOrder(updatedOrder);
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
        />
      </div>
    </section>
  );
}
