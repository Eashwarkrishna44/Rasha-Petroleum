import { useCallback } from "react";
import "./ResetPassword.css";

const ResetPassword = () => {
  const onLoginButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="reset-password">
      <img className="reset-password-child" alt="" src="/group-2@2x.png" />
      <img className="reset-password-item" alt="" src="/group-3@2x.png" />
      <img className="logo-icon" alt="" src="/logo@2x.png" />
      <b className="rasha-petroleum">
        <p className="rasha-petroleum1">{`Rasha Petroleum `}</p>
      </b>
      <img className="hero-shape-swirl" alt="" src="/hero-shape-swirl@2x.png" />
      <img
        className="hero-shape-swirl1"
        alt=""
        src="/hero-shape-swirl@2x.png"
      />
      <div className="login-button-wrapper">
        <div className="login-button" onClick={onLoginButtonContainerClick}>
          <div className="login-button-child" data-scroll-to="rectangle" />
          <b className="back-to-login">Back to login</b>
        </div>
      </div>
      <div className="auth-footer">
        <div className="type-in-your">
          Type in your registered email address to reset password
        </div>
      </div>
      <div className="login-form">
        <div className="textfieldoutlined">
          <div className="input1">
            <div className="inactive1">
              <div className="label1">new password *</div>
            </div>
          </div>
        </div>
        <div className="textfieldoutlined1">
          <div className="input2">
            <div className="inactive1">
              <div className="label1">Password *</div>
            </div>
          </div>
        </div>
        <div className="typography">
          <div className="h6">Reset your password</div>
        </div>
      </div>
      <div className="login-form1">
        <div className="textfieldoutlined2">
          <div className="input1">
            <div className="inactive1">
              <div className="label1">Retry new password *</div>
            </div>
          </div>
        </div>
        <div className="button2">
          <div className="unstyledbutton1">
            <div className="content2">
              <div className="button3">Reset</div>
              <img className="masked-icon2" alt="" src="/masked-icon@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
