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
      <div className="back-order-print">
        <PrintDetails
          print={backPrint}
          isCart={false}
          side="back"
          handlePrintChange={handlePrintChange}
          getPrintDimensions={getPrintDimensions}
        />
        <FileBlock
          handleFileChange={handleFileChange}
          removeFile={removeFile}
          side="back"
        />
      </div>
      <div className="front-order-print">
        <PrintDetails
          print={frontPrint}
          isCart={false}
          handlePrintChange={handlePrintChange}
          side="front"
          getPrintDimensions={getPrintDimensions}
        />
        <FileBlock
          handleFileChange={handleFileChange}
          removeFile={removeFile}
          side="front"
        />
      </div>
    </section>
  );
}
