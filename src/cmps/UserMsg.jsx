import { useEffect } from "react";

export function UserMsg({ whichMsg, yesFunc, msgId, setMsgId }) {
  const subject = whichMsg === "item-delete" ? "פריט" : " הזמנה מסל הקניות?";
  return (
    <div className={"overlay" + (msgId ? "" : " hidden")}>
      <section className="user-msg">
        <div className="title">
          <span> {"האם אתה בטוח שברצונך למחוק את ה" + subject}</span>
        </div>
        <div className="options">
          <button
            className="yes option"
            onClick={() => {
              yesFunc(msgId);
              setMsgId(null);
            }}
          >
            מחק
          </button>
          <button className="no option" onClick={() => setMsgId(null)}>
            בטל מחיקה
          </button>
        </div>
      </section>
    </div>
  );
}
