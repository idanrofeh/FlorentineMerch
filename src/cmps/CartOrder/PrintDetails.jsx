import { useEffect, useState } from "react";

import { hebService } from "../../services/heb.service";
import { PrintTypeSelect } from "../ControlBox/PrintTypeSelect";

export function PrintDetails({
  print,
  side,
  isCart,
  handlePrintChange,
  getPrintDimensions,
}) {
  const [dimensions, setDimensions] = useState({});
  useEffect(async () => {
    const dimensions = await getPrintDimensions(null, print?.url, null, 50, 50);
    setDimensions(dimensions);
  }, [print?.url]);
  const title = side === "front" ? "הדפסה קדמית" : "הדפסה אחורית";

  if (!print || !print.url)
    return (
      <section className={"print-details empty-print-details " + side}>
        <div className="print-title">{title}</div>
        <span>לא נבחר קובץ</span>
      </section>
    );
  return (
    <section className={"print-details " + side}>
      <div className="print-title">{title}</div>
      <img
        height={dimensions?.height}
        width={dimensions?.width}
        src={print.url}
      />
      {isCart && (
        <div className="print-type">{hebService.getPrintType(print.type)}</div>
      )}
      {!isCart && (
        <PrintTypeSelect
          side={side}
          print={print}
          handlePrintChange={handlePrintChange}
        />
      )}
    </section>
  );
}
