import { PrintDetails } from "./PrintDetails.jsx";
import { FileBlock } from "../ControlBox/FileBlock.jsx";

export function OrderPrint({
  backPrint,
  frontPrint,
  isCart,
  handleFileChange,
  removeFile,
}) {
  return (
    <section className="order-print">
      <div>
        <PrintDetails print={frontPrint} side="front" />
        {!isCart && (
          <FileBlock
            handleFileChange={handleFileChange}
            removeFile={removeFile}
            side="front"
          />
        )}
      </div>
      <div>
        <PrintDetails print={backPrint} side="back" />
        {!isCart && (
          <FileBlock
            handleFileChange={handleFileChange}
            removeFile={removeFile}
            side="back"
          />
        )}
      </div>
    </section>
  );
}
