import { PrintDetails } from "./PrintDetails.jsx";

export function OrderPrint({ backPrint, frontPrint }) {
  return (
    <section className="order-print">
      <PrintDetails print={frontPrint} side="front" />
      <PrintDetails print={backPrint} side="back" />
    </section>
  );
}
