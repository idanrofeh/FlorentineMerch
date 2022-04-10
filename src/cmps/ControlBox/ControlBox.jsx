import { ControlForm } from "./ControlForm.jsx";
import { EditBar } from "./EditBar.jsx";

export function ControlBox({
  preview,
  changeFunctions,
  toggleIsFront,
  side,
  addItemFromPreview,
  setIsPrintEdit,
  print,
}) {
  const changeItemColor = (color) => {
    const targetObj = { target: { name: "itemColor", value: color } };
    changeFunctions.handlePreviewChange(targetObj);
  };

  return (
    <>
      <ControlForm
        side={side}
        preview={preview}
        print={print}
        changeFunctions={changeFunctions}
        toggleIsFront={toggleIsFront}
        changeItemColor={changeItemColor}
        addItemFromPreview={addItemFromPreview}
        setIsPrintEdit={setIsPrintEdit}
      />
      <EditBar
        side={side}
        preview={preview}
        changeFunctions={changeFunctions}
        toggleIsFront={toggleIsFront}
        changeItemColor={changeItemColor}
        addItemFromPreview={addItemFromPreview}
        setIsPrintEdit={setIsPrintEdit}
      />
    </>
  );
}
