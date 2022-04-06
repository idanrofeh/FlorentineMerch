import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function _AppHeader({ cart }) {
  return (
    <section className="app-header">
      <NavLink to="/" className="logo">
        <img
          alt=""
          src="https://res.cloudinary.com/dc6ailej1/image/upload/v1648519937/d49077fa_1_wk9qir.png"
        />
      </NavLink>
      <div className="header-nav">
        <NavLink className="header-btn" to="/about">
          צור קשר
        </NavLink>
        <NavLink className="header-btn" to="/cart">
          {"עגלה " + (cart.length ? `(${cart.length})` : "")}
        </NavLink>
        <NavLink className="header-btn" to="/">
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
