import { PrintEdit } from "./PrintEdit.jsx";
import { PreviewControls } from "./PreviewControls.jsx";

export function ControlForm({
  changeItemColor,
  preview,
  changeFunctions,
  toggleIsFront,
  side,
  setIsPreview,
  addItemFromPreview,
  print,
  items,
}) {
  const {
    handleFileChange,
    handlePreviewChange,
    handlePrintChange,
    removeFile,
  } = changeFunctions;

  const rotationClass = side === "front" ? "" : " form-y-rotate";

  return (
    <form className={"control-form" + rotationClass}>
      <div className="form-inputs">
        {Boolean(items.length <= 1) && (
          <PrintEdit
            handleFileChange={handleFileChange}
            handlePrintChange={handlePrintChange}
            side={side}
            print={print}
            removeFile={removeFile}
          />
        )}
        <PreviewControls
          preview={preview}
          handlePreviewChange={handlePreviewChange}
          changeItemColor={changeItemColor}
          toggleIsFront={toggleIsFront}
        />
      </div>
      <section className="form-nav">
        <button
          className="edit-nav-btn print-nav"
          onClick={(ev) => {
            //TODO: PRINT IS REQUIRED
            ev.preventDefault();
            addItemFromPreview();
            setIsPreview(false);
          }}
        >
          🡠 הוסף פריט
        </button>
      </section>
    </form>
  );
}
