export function UserWarning(
  txt,
  yes,
  no,
  yesFunc,
  isWarningOpen,
  setIsWarningOpen
) {
  return (
    <section className={"user-warning " + isWarningOpen ? "open" : ""}>
      <button onClick={() => setIsWarningOpen(false)}>X</button>
      <div className="txt">{txt}</div>
      {Boolean(yes) && (
        <div className="nav">
          <button className="nav-btn" onClick={yesFunc}>
            <span>{yes}</span>
          </button>
          <button onClick={() => setIsWarningOpen(false)} className="nav-btn">
            <span>{no}</span>
          </button>
        </div>
      )}
    </section>
  );
}
