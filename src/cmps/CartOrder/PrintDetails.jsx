export function PrintDetails({ print, side }) {
  const title = side === "front" ? "הדפסה קדמית" : "הדפסה אחורית";

  let type;
  if (print) {
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
  }

  if (!print)
    return (
      <section className={"print-details " + side}>
        <div className="print-title">{title}</div>
        <span>לא נבחר קובץ</span>
      </section>
    );
  return (
    <section className={"print-details " + side}>
      <div className="print-title">{title}</div>
      <img height={30} width={50} src={print.url} />
      <div className="print-type">{type}</div>
    </section>
  );
}
