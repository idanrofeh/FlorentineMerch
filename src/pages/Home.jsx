import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

import { imgService } from "../services/img.service.js";

import { Canvas } from "../cmps/Canvas.jsx";
import { ControlBox } from "../cmps/ControlBox.jsx";

export function Home() {
  const [order, setOrder] = useState(null);
  const [isFront, setIsFront] = useState(true);

  useEffect(() => {
    setOrder(newOrder);
  }, []);

  // const frontTransition = useTransition(isFront, {
  //   from: { x: 2000 },
  //   leave: { x: 2000 },
  // });

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

  const handleItemChange = ({ target }) => {
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
    const frontPrint = { ...order.canvas.frontPrint, url };
    const updatedCanvas = { ...order.canvas, frontPrint };
    setOrder({ ...order, canvas: updatedCanvas });
  };

  const handlePrintChange = ({ target }, side) => {
    const { name, value } = target;
    const currPrint = { ...order.canvas[side], [name]: value };
    const newCanvas = { ...order.canvas, [side]: currPrint };
    setOrder({ ...order, canvas: newCanvas });
  };

  const toggleIsFront = () => {
    setIsFront(!isFront);
  };

  if (!order) return <span>Loading..</span>;
  return (
    <section className="home page">
      {isFront && (
        <div className="order-editor">
          <Canvas canvasData={order.canvas} side="front" />
          <ControlBox
            side="front"
            orderData={order}
            handleItemChange={handleItemChange}
            handleOrderChange={handleOrderChange}
            handleFileChange={handleFileChange}
            toggleIsFront={toggleIsFront}
            handlePrintChange={handlePrintChange}
          />
        </div>
      )}
      {/* {frontTransition((style, item) =>
        item ? (
          <animated.div className="order-editor" style={style}>
            <Canvas canvasData={order.canvas} side="front" />
            <ControlBox
              side="front"
              orderData={order}
              handleItemChange={handleItemChange}
              handleOrderChange={handleOrderChange}
              handleFileChange={handleFileChange}
              toggleIsFront={toggleIsFront}
              handlePrintChange={handlePrintChange}
            />
          </animated.div>
        ) : (
          ""
        )
      )} */}
      {!isFront && (
        <div className="order-editor">
          <Canvas canvasData={order.canvas} side="back" />
          <ControlBox
            side="back"
            orderData={order}
            handleItemChange={handleItemChange}
            handleOrderChange={handleOrderChange}
            handleFileChange={handleFileChange}
            toggleIsFront={toggleIsFront}
            handlePrintChange={handlePrintChange}
          />
        </div>
      )}
    </section>
  );
}
