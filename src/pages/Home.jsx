import { useState, useEffect } from "react";
import axios from "axios";

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
    const updatedOrder = { ...order, canvas: updatedCanvas };
    setOrder(updatedOrder);
  };

  const handlePrintChange = async ({ target }) => {
    const { files } = target;
    const file = files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "zbxbp7ja");
    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/dc6ailej1/image/upload",
      formData
    );
    const { url } = data;
    console.log(url);
    const frontPrint = { url };
    const updatedCanvas = { ...order.canvas, frontPrint };
    setOrder({ ...order, canvas: updatedCanvas });
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
          handlePrintChange={handlePrintChange}
        />
      </div>
    </section>
  );
}
