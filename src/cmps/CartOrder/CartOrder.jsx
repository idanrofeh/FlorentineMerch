import { useNavigate } from "react-router-dom";

import { OrderPrint } from "./OrderPrint.jsx";
import { ItemList } from "./ItemList.jsx";

export function CartOrder({ order, setMsgId }) {
  let navigate = useNavigate();

  const { items, backPrint, frontPrint, price } = order;
  return (
    <section className="cart-order">
      <div
        onClick={() => {
          navigate(`/FlorentineMerch/?orderId=${order.id}`);
        }}
        className="order-preview"
      >
        <div className="price">{}</div>
        <OrderPrint
          backPrint={backPrint}
          frontPrint={frontPrint}
          isCart={true}
        />
        <ItemList items={items} />
      </div>
      <button onClick={() => setMsgId(order.id)}>X</button>
    </section>
  );
}
