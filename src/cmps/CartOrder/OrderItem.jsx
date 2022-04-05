export function OrderItem({ item }) {
  const { type, color, amount, size } = item;
  return (
    <section className="order-item">
      <div>{type}</div>
      <div>{color}</div>
      <div>{amount}</div>
      <div> {size} </div>
    </section>
  );
}
