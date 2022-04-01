import { ControlForm } from "./ControlForm.jsx";
import { EditBar } from "./EditBar.jsx";

export function ControlBox({
  orderData,
  changeFunctions,
  toggleIsFront,
  side,
}) {
  const changeItemColor = (color) => {
    const targetObj = { target: { name: "item-color", value: color } };
    changeFunctions.handleItemChange(targetObj);
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

  return (
    <>
      <ControlForm
        side={side}
        orderData={orderData}
        changeFunctions={changeFunctions}
        toggleIsFront={toggleIsFront}
        itemColors={itemColors}
        changeItemColor={changeItemColor}
      />
      <EditBar
        side={side}
        orderData={orderData}
        changeFunctions={changeFunctions}
        toggleIsFront={toggleIsFront}
        itemColors={itemColors}
        changeItemColor={changeItemColor}
      />
    </>
  );
}
