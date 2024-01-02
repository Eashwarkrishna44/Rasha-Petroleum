import { useCallback } from "react";
import "./ResetPassword1.css";

const ResetPassword1 = () => {
  const onLoginButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="reset-password1">
      <img className="reset-password-inner" alt="" src="/group-2@2x.png" />
      <img className="group-icon" alt="" src="/group-3@2x.png" />
      <img className="logo-icon1" alt="" src="/logo@2x.png" />
      <b className="rasha-petroleum2">
        <p className="rasha-petroleum3">{`Rasha Petroleum `}</p>
      </b>
      <img
        className="hero-shape-swirl2"
        alt=""
        src="/hero-shape-swirl@2x.png"
      />
      <img
        className="hero-shape-swirl3"
        alt=""
        src="/hero-shape-swirl@2x.png"
      />
      <div className="login-button-container">
        <div className="login-button1" onClick={onLoginButtonContainerClick}>
          <div className="login-button-item" data-scroll-to="rectangle" />
          <b className="back-to-login1">Back to login</b>
        </div>
      </div>
      <div className="auth-footer1">
        <div className="type-in-your1">
          Type in your registered email address to reset password
        </div>
      </div>
      <div className="login-form2">
        <div className="button4">
          <div className="unstyledbutton2">
            <div className="content3">
              <div className="button5">contact Support</div>
              <img className="masked-icon3" alt="" src="/masked-icon@2x.png" />
            </div>
          </div>
        </div>
        <div className="typography1">
          <div className="h61">Recovery Email Sent!</div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword1;
