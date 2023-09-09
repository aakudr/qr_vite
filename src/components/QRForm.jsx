import React from "react";
import { TextField, Button, Checkbox } from "./primitives";
import styles from "./QRForm.module.sass";
import PropTypes from "prop-types";

const QRForm = ({ inputHandler }) => {
  const [description, setDescription] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [liveMode, setLiveMode] = React.useState(false);
  const [data, setData] = React.useState("https://example.com");
  return (
    <div className={styles.root}>
      <TextField
        label="Enter data to encode"
        defaultValue="https://example.com"
        description={description}
        onChange={
          liveMode
            ? (value) => {
                inputHandler(value);
                setData(value);
                setErrorMessage("");
              }
            : (value) => {
                setData(value);
                data && setErrorMessage("");
              }
        }
        errorMessage={errorMessage}
      >
        {data}
      </TextField>
      <Checkbox
        onChange={(value) => {
          setLiveMode(value);
          setDescription(value ? "Live mode active" : "");
          inputHandler(data);
        }}
      >
        Toggle live mode
      </Checkbox>
      <Button
        onPress={() => {
          data
            ? (inputHandler(data), setErrorMessage(""))
            : setErrorMessage("Hey, you really want an empty square?");
        }}
      >
        Generate QR Code
      </Button>
    </div>
  );
};

QRForm.propTypes = {
  inputHandler: PropTypes.func.isRequired,
};

export default QRForm;
