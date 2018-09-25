import React from "react";
import HeaderHoverMenu from "./HeaderHoverMenu";
import { ThemeContext } from "./theme-context";

const HeaderControlsSettingsMenu = ({ current, handleChooseDimension }) => {
  return (
    <HeaderHoverMenu heading="Dimension" positionClass="settings-menu">
      <ThemeContext>
        {({ theme }) => (
          <React.Fragment>
            <h2
              id="fluid"
              className={
                current === "fluid"
                  ? `hover-menu-dimension active ${theme}`
                  : "hover-menu-dimension"
              }
              onClick={e => handleChooseDimension(e)}
            >
              Fluid
            </h2>
            <h2
              id="boxed"
              className={
                current === "boxed"
                  ? `hover-menu-dimension active ${theme}`
                  : "hover-menu-dimension"
              }
              onClick={e => handleChooseDimension(e)}
            >
              Boxed (990px)
            </h2>
            <h1 className="hover-menu-title">Layout</h1>
            <form className="hover-menu-layout">
              <div>
                <input type="radio" name="layout" value="LTR" defaultChecked />
                LTR
              </div>
              <div>
                <input type="radio" name="layout" value="RTL" />
                RTL
              </div>
            </form>
            <h1 className="hover-menu-title">Body Layout</h1>
            <form className="hover-menu-layout">
              <div>
                <input
                  type="radio"
                  name="body-layout"
                  value="fixed"
                  defaultChecked
                />
                Fixed (Header + Sidebar)
              </div>
              <div>
                <input type="radio" name="body-layout" value="static" />
                Static
              </div>
            </form>
          </React.Fragment>
        )}
      </ThemeContext>
    </HeaderHoverMenu>
  );
};

export default HeaderControlsSettingsMenu;
