import { useNavigate } from "react-router-dom";

import { OrderPrint } from "./OrderPrint.jsx";
import { ItemList } from "./ItemList.jsx";

export function CartOrder({ order, removeOrder }) {
  let navigate = useNavigate();

  const { items, backPrint, frontPrint } = order;
  return (
    <section className="cart-order">
      <div
        onClick={() => {
          navigate(`/?orderId=${order.id}`);
        }}
        className="order-preview"
      >
        <OrderPrint
          backPrint={backPrint}
          frontPrint={frontPrint}
          isCart={true}
        />
        <ItemList items={items} />
      </div>
      <button onClick={() => removeOrder(order.id)}>X</button>
    </section>
  );
}
