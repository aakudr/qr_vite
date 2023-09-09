import QRCode from "./components/QRCode";
import QRForm from "./components/QRForm";
import React from "react";

import "./App.css";

function App() {
  const [data, setData] = React.useState("https://example.com");

  const handleDataChange = (value) => {
    setData(value);
  };

  return (
    <>
      <h1>QR Code creator</h1>
      <QRCode data={data}></QRCode>
      <QRForm
        inputHandler={handleDataChange}
      ></QRForm>
    </>
  );
}

export default App;
