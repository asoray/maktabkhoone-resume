import React from "react";

const DownIcon = props => {
  return (
    <div
      onClick={props.onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "-50px",
        transform: "translateY(-55px)",
        cursor: "pointer"
      }}
    >
      <div>
        <img src={props.icon} alt="" style={{
            maxWidth: "40px"
        }}/>
      </div>
    </div>
  );
};

export default DownIcon;
