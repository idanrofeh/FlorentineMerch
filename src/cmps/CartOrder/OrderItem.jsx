import { hebService } from "../../services/heb.service";

export function OrderItem({ item }) {
  const { itemType, itemColor, amount, size } = item;
  return (
    <section className="order-item">
      <div>{hebService.getItemType(itemType)}</div>
      <div className="color" style={{ backgroundColor: itemColor }}></div>
      <div> {size} </div>
      <div>
        {amount}
        <span>{" :יחידות"}</span>
      </div>
    </section>
  );
}
