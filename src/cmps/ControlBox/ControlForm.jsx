import { PrintEdit } from "./PrintEdit.jsx";
import { PreviewControls } from "./PreviewControls.jsx";

export function ControlForm({
  changeItemColor,
  preview,
  changeFunctions,
  toggleIsFront,
  side,
  setIsPrintEdit,
  addItemFromPreview,
  print,
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
        <PrintEdit
          handleFileChange={handleFileChange}
          handlePrintChange={handlePrintChange}
          side={side}
          print={print}
          removeFile={removeFile}
        />
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
            setIsPrintEdit(false);
          }}
        >
          🡠 הוסף פריט
        </button>
      </section>
    </form>
  );
}
