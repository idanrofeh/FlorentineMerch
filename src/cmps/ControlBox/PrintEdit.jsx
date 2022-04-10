import { FileBlock } from "./FileBlock.jsx";
import { PrintTypeSelect } from "./PrintTypeSelect.jsx";

export function PrintEdit({
  handleFileChange,
  handlePrintChange,
  side,
  print,
  removeFile,
}) {
  return (
    <section className="print-edit">
      <FileBlock
        handleFileChange={handleFileChange}
        removeFile={removeFile}
        side={side}
      />
      <PrintTypeSelect
        handlePrintChange={handlePrintChange}
        side={side}
        print={print}
      />
    </section>
  );
}
