import { OrderItem } from "./OrderItem.jsx";

export function ItemList({ items }) {
  console.log(items);
  return (
    <section className="item-list">
      {items.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
    </section>
  );
}
