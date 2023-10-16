import { useState } from "react";
import SignUpForm from "./assets/components/SignUpForm";
import Authenticate from "./assets/components/Authenticate";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token}  />
    </>
  );
}

export default App;
