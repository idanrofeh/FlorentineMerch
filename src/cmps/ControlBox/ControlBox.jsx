import { ControlForm } from "./ControlForm.jsx";
import { EditBar } from "./EditBar.jsx";

export function ControlBox({
  preview,
  changeFunctions,
  toggleIsFront,
  side,
  items,
  setIsPrintEdit,
}) {
  const changeItemColor = (color) => {
    const targetObj = { target: { name: "item-color", value: color } };
    changeFunctions.handlePreviewChange(targetObj);
  };

  return (
    <>
      <ControlForm
        side={side}
        preview={preview}
        changeFunctions={changeFunctions}
        toggleIsFront={toggleIsFront}
        changeItemColor={changeItemColor}
        items={items}
        setIsPrintEdit={setIsPrintEdit}
      />
      <EditBar
        side={side}
        preview={preview}
        changeFunctions={changeFunctions}
        toggleIsFront={toggleIsFront}
        changeItemColor={changeItemColor}
        items={items}
        setIsPrintEdit={setIsPrintEdit}
      />
    </>
  );
}
