import { useCallback } from "react";
import "./ResetPassword2.css";

const ResetPassword2 = () => {
  const onLoginButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="reset-password2">
      <img className="reset-password-child1" alt="" src="/group-2@2x.png" />
      <img className="reset-password-child2" alt="" src="/group-3@2x.png" />
      <img className="logo-icon2" alt="" src="/logo@2x.png" />
      <b className="rasha-petroleum4">
        <p className="rasha-petroleum5">{`Rasha Petroleum `}</p>
      </b>
      <img
        className="hero-shape-swirl4"
        alt=""
        src="/hero-shape-swirl@2x.png"
      />
      <img
        className="hero-shape-swirl5"
        alt=""
        src="/hero-shape-swirl@2x.png"
      />
      <div className="login-button-frame">
        <div className="login-button2" onClick={onLoginButtonContainerClick}>
          <div className="login-button-inner" data-scroll-to="rectangle" />
          <b className="back-to-login2">Back to login</b>
        </div>
      </div>
      <div className="login-form3">
        <div className="textfieldoutlined3">
          <div className="input4">
            <div className="inactive4">
              <div className="label4">Email Address *</div>
            </div>
          </div>
        </div>
        <div className="textfieldoutlined4">
          <div className="input5">
            <div className="inactive4">
              <div className="label4">Password *</div>
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <div className="button6">
            <div className="unstyledbutton3">
              <div className="content4">
                <div className="button7">Next</div>
                <img
                  className="masked-icon4"
                  alt=""
                  src="/masked-icon@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="typography2">
          <div className="h62">Reset your password</div>
        </div>
      </div>
      <div className="auth-footer2">
        <div className="type-in-your2">
          Type in your registered email address to reset password
        </div>
      </div>
    </div>
  );
};

export default ResetPassword2;
