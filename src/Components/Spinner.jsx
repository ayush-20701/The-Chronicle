import React from "react";
import loading from "./Assets/Spinner.gif";
const Spinner = () => {
  return (
    <div className="spinner" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "20vh"}}>
      <img src={loading} alt=""/>
    </div>
  );
}
export default Spinner;