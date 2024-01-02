import { useCallback } from "react";
import "./CreateAccount2.css";

const CreateAccount2 = () => {
  const onLoginButtonContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="create-account2">
      <img className="create-account-child1" alt="" src="/group-2@2x.png" />
      <img className="create-account-child2" alt="" src="/group-3@2x.png" />
      <img className="logo-icon3" alt="" src="/logo@2x.png" />
      <b className="rasha-petroleum8">
        <p className="rasha-petroleum9">{`Rasha Petroleum `}</p>
      </b>
      <div className="right">
        <div className="dont-have-an-container">
          <span>{`Don’t have an account? `}</span>
          <span className="log-in">Log In</span>
        </div>
        <div className="form">
          <div className="login-button5">
            <div className="create-account3">Create account</div>
          </div>
          <div className="terms-and-privacy-policy">
            <div className="terms-and-privacy-policy-child" />
            <div className="i-agree-to-container">
              <span>{`I agree to all the `}</span>
              <span className="log-in">Terms</span>
              <span>{` and `}</span>
              <span className="log-in">{`Privacy policy `}</span>
            </div>
          </div>
          <div className="remember-me">
            <div className="terms-and-privacy-policy-child" />
            <div className="i-agree-to-container">Remember me</div>
          </div>
          <div className="entry-field">
            <div className="entry-field1">
              <div className="i-agree-to-container">First name</div>
              <div className="rectangle-parent">
                <div className="group-child" />
                <div className="first-name1">First name</div>
              </div>
            </div>
            <div className="entry-field2">
              <div className="i-agree-to-container">Email or phone number</div>
              <div className="rectangle-parent">
                <div className="group-child" />
                <div className="first-name1">bill.sanders@example.com</div>
              </div>
            </div>
            <div className="entry-field3">
              <div className="i-agree-to-container">Password</div>
              <div className="rectangle-parent">
                <div className="group-child" />
                <div className="first-name1">First name</div>
              </div>
            </div>
            <div className="entry-field4">
              <div className="i-agree-to-container">Confirm password</div>
              <div className="rectangle-parent">
                <div className="group-child" />
                <div className="first-name1">First name</div>
              </div>
            </div>
            <div className="entry-field5">
              <div className="i-agree-to-container">
                <span>{`Date of birth `}</span>
                <span className="mmddyy">(MM/DD/YY)</span>
              </div>
              <div className="rectangle-parent">
                <div className="group-child" />
                <div className="first-name1">First name</div>
              </div>
            </div>
            <div className="entry-field6">
              <div className="i-agree-to-container">Last name</div>
              <div className="rectangle-parent">
                <div className="group-child" />
                <div className="first-name1">First name</div>
              </div>
            </div>
            <img
              className="calendar-month-outline-icon"
              alt=""
              src="/calendarmonthoutline@2x.png"
            />
          </div>
        </div>
        <div className="text">
          <div className="create-account4">Create account</div>
          <div className="for-business-band">
            For business, band or celebrity.
          </div>
        </div>
      </div>
      <div className="login-button-wrapper2">
        <div className="login-button6" onClick={onLoginButtonContainer1Click}>
          <div className="login-button-child2" data-scroll-to="rectangle" />
          <b className="create-account5">Create account</b>
        </div>
      </div>
      <div className="back1">Back</div>
    </div>
  );
};

export default CreateAccount2;
