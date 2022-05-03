import { imgService } from "../../services/img.service.js";

import { PrintDetails } from "./PrintDetails.jsx";
import { FileBlock } from "../ControlBox/FileBlock.jsx";

export function OrderPrint({
  backPrint,
  frontPrint,
  isCart,
  handleFileChange,
  removeFile,
}) {
  const getPrintDimensions = async (
    printType,
    url,
    itemType,
    maxHeight,
    maxWidth
  ) => {
    const dimensions = await imgService.getImgDimensions(
      url,
      printType,
      itemType,
      maxHeight,
      maxWidth
    );
    return dimensions;
  };
  return (
    <section className="order-print">
      <div>
        <PrintDetails
          print={frontPrint}
          side="front"
          getPrintDimensions={getPrintDimensions}
          isCart={true}
        />
        {!isCart && (
          <FileBlock
            handleFileChange={handleFileChange}
            removeFile={removeFile}
            side="front"
          />
        )}
      </div>
      <div>
        <PrintDetails
          print={backPrint}
          side="back"
          getPrintDimensions={getPrintDimensions}
          isCart={true}
        />
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
