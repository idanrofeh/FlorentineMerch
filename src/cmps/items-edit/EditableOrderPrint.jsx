import { PrintDetails } from "../CartOrder/PrintDetails";
import { FileBlock } from "../ControlBox/FileBlock";

export function EditableOrderPrint({
  backPrint,
  frontPrint,
  handleFileChange,
  removeFile,
  handlePrintChange,
  getPrintDimensions,
}) {
  return (
    <section className="order-print">
      <div className="front-order-print">
        <PrintDetails
          print={frontPrint}
          isCart={false}
          side="front"
          handlePrintChange={handlePrintChange}
          getPrintDimensions={getPrintDimensions}
        />
        <FileBlock
          handleFileChange={handleFileChange}
          removeFile={removeFile}
          side="front"
        />
      </div>
      <div className="back-order-print">
        <PrintDetails
          print={backPrint}
          isCart={false}
          handlePrintChange={handlePrintChange}
          side="back"
          getPrintDimensions={getPrintDimensions}
        />
        <FileBlock
          handleFileChange={handleFileChange}
          removeFile={removeFile}
          side="back"
        />
      </div>
    </section>
  );
}
