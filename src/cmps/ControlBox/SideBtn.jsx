export function SideBtn({ toggleIsFront }) {
  return (
    <button
      className="side-btn pointer"
      onClick={(ev) => {
        ev.preventDefault();
        toggleIsFront();
      }}
    >
      החלף צד 🔄
    </button>
  );
}
