import * as React from "react";
import { Link } from "gatsby";
import ThemeButton from "./ThemeButton";
import useDarkMode from "use-dark-mode";
import Navigate from "./Navigate";
import Avatar from "./Avatar";
import { headerroot, h2, rightwrap, leftwrap } from "./header.module.less";

const Header = ({ siteTitle }) => {
  const darkMode = useDarkMode(false);

  return (
    <header className={headerroot}>
      <div className={leftwrap}>
        <h2 className={h2}>欢迎来到我的花园！！</h2>
      </div>
      <div className={rightwrap}>
        {/* <Navigate /> */}
        <Avatar />
        <ThemeButton mode={darkMode} />
      </div>
    </header>
  );
};

export default Header;
