import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import ResetPassword1 from "./pages/ResetPassword1";
import ResetPassword2 from "./pages/ResetPassword2";
import CreateAccount1 from "./pages/CreateAccount1";
import CreateAccount2 from "./pages/CreateAccount2";
import LoginScreen from "./pages/LoginScreen";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password1":
        title = "";
        metaDescription = "";
        break;
      case "/create-account":
        title = "";
        metaDescription = "";
        break;
      case "/create-account1":
        title = "";
        metaDescription = "";
        break;
      case "/-login-screen":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ResetPassword />} />
      <Route path="/reset-password" element={<ResetPassword1 />} />
      <Route path="/reset-password1" element={<ResetPassword2 />} />
      <Route path="/create-account" element={<CreateAccount1 />} />
      <Route path="/create-account1" element={<CreateAccount2 />} />
      <Route path="/-login-screen" element={<LoginScreen />} />
    </Routes>
  );
}
export default App;
