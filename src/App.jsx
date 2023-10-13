import { useState } from "react";
import SignUpForm from "./assets/components/SignUpForm";
import Authenticate from "./assets/components/Authenticate";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignUpForm />
      <Authenticate />
    </>
  );
}

export default App;
