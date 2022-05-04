import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function _AppHeader({ cart }) {
  return (
    <section className="app-header">
      <NavLink to="/FlorentineMerch" className="logo">
        <img
          alt=""
          src="https://res.cloudinary.com/dc6ailej1/image/upload/v1648519937/d49077fa_1_wk9qir.png"
        />
      </NavLink>
      <div className="header-nav">
        <NavLink className="header-btn" to="/FlorentineMerch/about">
          צור קשר
        </NavLink>
        <NavLink className="header-btn" to="/FlorentineMerch/cart">
          {"עגלה " + (cart.length ? `(${cart.length})` : "")}
        </NavLink>
        <NavLink className="header-btn" to="/FlorentineMerch">
          הזמנה חדשה
        </NavLink>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cartModule.cart,
  };
}

export const AppHeader = connect(mapStateToProps)(_AppHeader);
