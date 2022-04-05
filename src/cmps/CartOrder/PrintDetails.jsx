export function PrintDetails({ print, side }) {
  const title = side === "front" ? "הדפסה קדמית" : "הדפסה אחורית";

  let type;
  switch (print.type) {
    case "pocket":
      type = "כיס";
      break;
    case "normal":
      type = "רגיל";
      break;
    case "big":
      type = "גדול";
      break;
    default:
      return;
  }
  return (
    <section className={"print-details " + side}>
      <div className="print-title">{title}</div>
      <img height={30} width={50} src={print.url} />
      <div className="print-type">{type}</div>
    </section>
  );
}
