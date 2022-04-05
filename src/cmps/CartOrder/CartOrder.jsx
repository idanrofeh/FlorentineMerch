import { useNavigate } from "react-router-dom";

import { OrderPrint } from "./OrderPrint.jsx";
import { ItemList } from "./ItemList.jsx";

export function CartOrder({ order, removeOrder }) {
  let navigate = useNavigate();

  const { items } = order;
  const { backPrint } = order;
  const { frontPrint } = order;
  console.log(items);
  return (
    <section className="cart-order">
      <div
        onClick={() => {
          navigate(`/?orderId=${order.id}`);
        }}
        className="order-preview"
      >
        <OrderPrint backPrint={backPrint} frontPrint={frontPrint} />
        <ItemList items={items} />
      </div>
      <button onClick={() => removeOrder(order.id)}>X</button>
    </section>
  );
}
