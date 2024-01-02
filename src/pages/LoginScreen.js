import { useCallback } from "react";
import "./LoginScreen.css";

const LoginScreen = () => {
  const onLoginButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="login-screen">
      <div className="login-screen-child" />
      <div className="pictures">
        <img className="pictures-child" alt="" src="/group-1@2x.png" />
        <div className="pictures-item" />
        <div className="pictures-inner" />
        <img
          className="undraw-pay-online-re-aqe6-1-icon"
          alt=""
          src="/undraw-pay-online-re-aqe6-1@2x.png"
        />
        <b className="enter-the-power-container">
          <span>{`“Enter the power `}</span>
          <span className="zone">Zone</span>
          <span> “.</span>
        </b>
        <b className="accessing-energy-container">
          <p className="accessing-energy">Accessing Energy ,</p>
          <p className="one-click-at">One Click at a Time!</p>
        </b>
        <b className="use-all-over-container">
          <p className="accessing-energy">Use all over</p>
          <p className="one-click-at">the world!</p>
        </b>
        <img
          className="undraw-advanced-customization-icon"
          alt=""
          src="/undraw-advanced-customization-re-wo6h-1@2x.png"
        />
        <img
          className="undraw-world-re-768g-1-icon"
          alt=""
          src="/undraw-world-re-768g-1@2x.png"
        />
      </div>
      <div className="login-button7" onClick={onLoginButtonContainerClick}>
        <div className="login-button-child3" data-scroll-to="rectangle" />
        <b className="login">Login</b>
      </div>
      <b className="forgot-your-password-container">
        <span>{`Forgot your `}</span>
        <span className="password">Password?</span>
      </b>
      <img className="login-screen-item" alt="" src="/group-2@2x.png" />
      <img className="login-screen-inner" alt="" src="/group-3@2x.png" />
      <b className="rasha-petroleum10">
        <p className="accessing-energy">{`Rasha Petroleum `}</p>
      </b>
      <img className="logo-icon4" alt="" src="/logo@2x.png" />
      <b className="rasha-petroleum12">
        <p className="accessing-energy">{`Rasha Petroleum `}</p>
      </b>
      <div className="line-div" />
      <div className="login-screen-child1" />
      <img className="lauser-ninja-icon" alt="" src="/lauserninja@2x.png" />
      <img
        className="fluentpassword-16-regular-icon1"
        alt=""
        src="/fluentpassword16regular@2x.png"
      />
      <div className="you-do-not-container">
        <span>{`You do not have an account? `}</span>
        <span className="register">Register</span>
      </div>
    </div>
  );
};

export default LoginScreen;
