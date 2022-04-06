import { hebService } from "../../services/heb.service";

export function OrderItem({ item }) {
  const { type, color, amount, size } = item;
  return (
    <section className="order-item">
      <div>{hebService.getItemType(type)}</div>
      <div className="color" style={{ backgroundColor: color }}></div>
      <div> {size} </div>
      <div>
        {amount}
        <span>{" :יחידות"}</span>
      </div>
    </section>
  );
}
