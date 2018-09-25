import React from "react";
import HeaderHoverMenu from "./HeaderHoverMenu";
import { ThemeContext } from "./theme-context";

const HeaderControlsLangMenu = ({
  languages,
  handleChooseLocaleClick,
  current
}) => {
  return (
    <HeaderHoverMenu heading="Choose A Locale" positionClass="''">
      <ThemeContext>
        {({ theme }) => (
          <ul className="hover-menu-list">
            {languages.map(lang => (
              <li
                key={lang.title}
                className={
                  current === lang.title
                    ? `hover-menu-lang active ${theme}`
                    : "hover-menu-lang"
                }
                onClick={e => handleChooseLocaleClick(lang.title, e)}
              >
                <img src={lang.flag} alt="us flag" width="35" height="30" />
                <h2 className="hover-menu-lang-title">{lang.title}</h2>
              </li>
            ))}
          </ul>
        )}
      </ThemeContext>
    </HeaderHoverMenu>
  );
};

export default HeaderControlsLangMenu;