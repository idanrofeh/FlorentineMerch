import { PrintDetails } from "./PrintDetails.jsx";

export function OrderPrint({ backPrint, frontPrint }) {
  return (
    <section className="order-print">
      {frontPrint && <PrintDetails print={frontPrint} side="front" />}
      {backPrint && <PrintDetails print={backPrint} side="back" />}
    </section>
  );
}
