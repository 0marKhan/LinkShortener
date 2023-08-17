import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import LinkResult from "./components/LinkResult";
import NeonText from "./components/NeonText";

function App() {
  const [inputLink, setInputLink] = useState("");
  return (
    <div className="column-order">
      <NeonText />
      <InputForm setInputLink={setInputLink} />
      <LinkResult inputLink={inputLink} />
    </div>
  );
}

export default App;
