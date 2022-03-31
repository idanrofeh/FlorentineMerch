import { Canvas } from "../cmps/Canvas.jsx";
import { ControlBox } from "../cmps/ControlBox.jsx";

export function OrderEditor({
  order,
  handleItemChange,
  handleOrderChange,
  handleFileChange,
  handlePrintChange,
  toggleIsFront,
  side,
}) {
  return (
    <div className="order-editor">
      <Canvas canvasData={order.canvas} side={side} />
      <ControlBox
        side={side}
        orderData={order}
        handleItemChange={handleItemChange}
        handleOrderChange={handleOrderChange}
        handleFileChange={handleFileChange}
        toggleIsFront={toggleIsFront}
        handlePrintChange={handlePrintChange}
      />
    </div>
  );
}
