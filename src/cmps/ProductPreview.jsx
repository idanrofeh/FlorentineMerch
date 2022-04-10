import { imgService } from "../services/img.service";
import { printData } from "../data/print.js";

export function ProductPreview({ side, preview, print }) {
  const currPrint = print[side + "Print"];
  console.log(currPrint);
  const { itemType } = preview;
  const printType = currPrint.type;
  const currPrintData = printData.printLayout[itemType][printType];
  const { top, left } = currPrintData;

  return (
    <section className="product-preview">
      {currPrint?.url && (
        <div
          className="print-img-container"
          style={{
            width: currPrint.width + "%",
            height: currPrint.height + "%",
            top,
            left,
          }}
        >
          <img className="print-img" src={currPrint.url}></img>
        </div>
      )}
      <div className="item-img-container">
        <img
          className="item-img"
          src={imgService[side + "ItemURLs"][preview.itemType] || ""}
        ></img>
      </div>
    </section>
  );
}
