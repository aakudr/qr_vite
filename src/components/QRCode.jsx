import React from "react";
import * as QR from "qrcode";
import PropTypes from "prop-types";

import styles from "./QRCode.module.sass";

const QRCode = ({ data }) => {

  React.useEffect(() => {
    const canvas = document.getElementById("canvas");
    QR.toCanvas(canvas, data, function (error) {
      if (error) console.error(error);
      console.log("success!");
    });
  }, [data]);

  return <canvas className={styles.root} id="canvas"></canvas>;
};

QRCode.propTypes = {
    data: PropTypes.string.isRequired,
};

export default QRCode;
