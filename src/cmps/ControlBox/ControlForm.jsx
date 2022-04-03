import { PrintEdit } from "./PrintEdit.jsx";
import { PreviewControls } from "./PreviewControls.jsx";

export function ControlForm({
  changeItemColor,
  itemColors,
  preview,
  changeFunctions,
  toggleIsFront,
  side,
  setIsPrintEdit,
}) {
  const { handleFileChange, handlePreviewChange, handlePrintChange } =
    changeFunctions;

  const rotationClass = side === "front" ? "" : " form-y-rotate";

  return (
    <form className={"control-form" + rotationClass}>
      <div className="form-inputs">
        <PrintEdit
          handleFileChange={handleFileChange}
          handlePrintChange={handlePrintChange}
          side={side}
          preview={preview}
        />
        <PreviewControls
          preview={preview}
          handlePreviewChange={handlePreviewChange}
          changeItemColor={changeItemColor}
          itemColors={itemColors}
        />
        <button
          className="side-btn pointer"
          onClick={(ev) => {
            ev.preventDefault();
            toggleIsFront();
          }}
        >
          החלף צד 🔄
        </button>
      </div>
      <section className="form-nav">
        <button
          className="edit-nav-btn print-nav"
          onClick={(ev) => {
            //TODO: PRINT IS REQUIRED
            ev.preventDefault();
            setIsPrintEdit(false);
          }}
        >
          🡠 התקדם
        </button>
      </section>
    </form>
  );
}
