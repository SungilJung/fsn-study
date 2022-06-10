import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemedButton(props: any) {
  const theme = useContext(ThemeContext);
  return (
    <button
      {...props}
      onClick={props.changeTheme}
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      Toggle Theme
    </button>
  );
}
