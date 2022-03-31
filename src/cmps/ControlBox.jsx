import { ControlForm } from "./ControlForm.jsx";
import { EditBar } from "./EditBar.jsx";

export function ControlBox({
  orderData,
  handleItemChange,
  handleOrderChange,
  handleFileChange,
  handlePrintChange,
  toggleIsFront,
  side,
}) {
  const changeItemColor = (color) => {
    handleItemChange({ target: { name: "item-color", value: color } });
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
  ];

  return (
    <>
      <ControlForm
        side={side}
        orderData={orderData}
        handleItemChange={handleItemChange}
        handleOrderChange={handleOrderChange}
        handleFileChange={handleFileChange}
        toggleIsFront={toggleIsFront}
        handlePrintChange={handlePrintChange}
        itemColors={itemColors}
        changeItemColor={changeItemColor}
      />
      <EditBar
        side={side}
        orderData={orderData}
        handleItemChange={handleItemChange}
        handleOrderChange={handleOrderChange}
        handleFileChange={handleFileChange}
        toggleIsFront={toggleIsFront}
        handlePrintChange={handlePrintChange}
        itemColors={itemColors}
        changeItemColor={changeItemColor}
      />
    </>
  );
}
