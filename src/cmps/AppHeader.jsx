import { NavLink } from "react-router-dom";

export function AppHeader() {
  return (
    <section className="app-header">
      <NavLink to="/" className="logo">
        <span>Florentine Merch</span>
      </NavLink>
      <div className="header-nav">
        <NavLink className="header-btn" to="/about">
          About
        </NavLink>
      </div>
    </section>
  );
}
