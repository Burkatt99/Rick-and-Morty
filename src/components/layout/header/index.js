import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../Themes/globalStyles";
import { lightTheme, darkTheme } from "../../Themes/themes";
import { useDarkMode } from "../../Themes/useDarkMode";

function Header() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="menu">
          <div className="title">
            <h2>Rick and Morty</h2>
          </div>
          <nav>
            <ul>
              <li>
                <Link className="link" to="/">
                  Main page
                </Link>
              </li>
              <li>
                <Link className="link" to="/add_person">
                  Add my person
                </Link>
              </li>
              <li className="link" onClick={themeToggler}>
                Theme
              </li>
            </ul>
          </nav>
        </div>
      </>
    </ThemeProvider>
  );
}

export default Header;
