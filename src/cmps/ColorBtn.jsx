export function ColorBtn({ changeItemColor, color }) {
  return (
    <button
      className="color-btn "
      style={{ backgroundColor: color }}
      onClick={(ev) => {
        ev.preventDefault();
        changeItemColor(color);
      }}
    ></button>
  );
}
