import { Helmet } from "react-helmet-async";
import Login from "../../components/forms/Login";

function LoginScreen() {
  return (
    <div>
      <Helmet>
        <title>Login | ProjectFlow</title>
      </Helmet>
      <div>
        <Login />
      </div>
    </div>
  );
}

export default LoginScreen;
