import React from "react";

interface Props {
  children: Array<React.ReactElement> | React.ReactElement;
}
const Dialog = (props: Props) => {
  return <div style={{ backgroundColor: "pink" }}>{props.children}</div>;
};

export default Dialog;
