import { connect } from "react-redux";

function _UserCredentials({ user }) {
  return (
    <section className="user-credentials page">
      <form>
        <div className="inputs">
          <label>
            שם מלא:
            <input type="text"></input>
          </label>
          <label>
            פלאפון:
            <input type="tel"></input>
          </label>
          <label>
            אימייל:
            <input type="email"></input>
          </label>
          <label>
            הערות לעגלה זו:
            <textarea></textarea>
          </label>
        </div>
      </form>
    </section>
  );
}
