import { useCallback } from "react";
import "./CreateAccount1.css";

const CreateAccount1 = () => {
  const onLoginButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="create-account1">
      <img className="create-account-child" alt="" src="/group-2@2x.png" />
      <img className="create-account-item" alt="" src="/group-3@2x.png" />
      <div className="logo">
        <div className="oval" />
        <div className="oval1" />
        <div className="oval2" />
        <div className="enter-otp-sent">
          "Enter OTP sent to your email/phone to unlock a world of
          possibilities. Your journey begins now – securely and swiftly!"
        </div>
      </div>
      <b className="rasha-petroleum6">
        <p className="rasha-petroleum7">{`Rasha Petroleum `}</p>
      </b>
      <div className="login-button-wrapper1">
        <div className="login-button4" onClick={onLoginButtonContainerClick}>
          <div className="login-button-child1" data-scroll-to="rectangle" />
          <b className="verify">Verify</b>
        </div>
      </div>
      <div className="back">Back</div>
      <div className="create-account-inner" />
      <img
        className="fluentpassword-16-regular-icon"
        alt=""
        src="/fluentpassword16regular@2x.png"
      />
    </div>
  );
};

export default CreateAccount1;
