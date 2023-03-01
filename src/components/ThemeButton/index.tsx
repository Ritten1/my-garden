import React from "react";
import { BulbOutlined } from "@ant-design/icons";
import { Button } from "antd";
import useDarkMode from "use-dark-mode";

export default function DarkModeButton() {
  const darkMode = useDarkMode(false);

  return (
    <Button
      onClick={darkMode.toggle}
      style={darkMode.value ? { background: "#000" } : { color: "#ffb74d" }}
    >
      {darkMode.value ? (
        <BulbOutlined style={{ color: "#ffb74d" }} />
      ) : (
        <BulbOutlined style={{ color: "#ff9800" }} />
      )}
    </Button>
  );
}
