import { ControlForm } from "./ControlForm.jsx";
import { EditBar } from "./EditBar.jsx";

export function ControlBox({
  preview,
  changeFunctions,
  toggleIsFront,
  side,
  addItemFromPreview,
  setIsPreview,
  print,
  items,
}) {
  const changeItemColor = (color) => {
    const targetObj = { target: { name: "itemColor", value: color } };
    changeFunctions.handlePreviewChange(targetObj);
  };

  return (
    <>
      <ControlForm
        items={items}
        side={side}
        preview={preview}
        print={print}
        changeFunctions={changeFunctions}
        toggleIsFront={toggleIsFront}
        changeItemColor={changeItemColor}
        addItemFromPreview={addItemFromPreview}
        setIsPreview={setIsPreview}
      />
      <EditBar
        side={side}
        preview={preview}
        changeFunctions={changeFunctions}
        toggleIsFront={toggleIsFront}
        changeItemColor={changeItemColor}
        addItemFromPreview={addItemFromPreview}
        setIsPreview={setIsPreview}
        items={items}
      />
      <div className="desktop-control-box">
        <button
          className={"side-btn" + (side === "front" ? "" : " rotated")}
          onClick={toggleIsFront}
        >
          החלף צד
        </button>
      </div>
    </>
  );
}
