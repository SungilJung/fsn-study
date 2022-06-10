import React from "react";
import { useState } from "react";
import { ThemeContext, themes } from "./ThemeContext";
import ThemedButton from "./ThemedButton";

export default function Example() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setTheme((prev) => (prev === themes.dark ? themes.light : themes.dark));
  };

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <ThemedButton changeTheme={toggleTheme} />
        <ThemeContext.Consumer>
          {(theme) => (
            <div
              style={{
                width: 300,
                height: 300,
                backgroundColor: theme.background,
              }}
            ></div>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
      <ThemedButton />
    </div>
  );
}
