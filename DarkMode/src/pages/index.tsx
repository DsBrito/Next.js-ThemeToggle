import { useEffect, useState } from "react";

export default function IndexPage() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    let localTheme = window.localStorage.getItem("theme");
    setTheme(localTheme);
  }, []);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <main className={theme}>
      <div>
        <h1>Darkmode toggle</h1>
        <button onClick={switchTheme} theme={theme}>
          {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        </button>
        <a href="https://github.com/DsBrito" target="_blank" rel="noreferrer">
          Visit my github
        </a>
      </div>
    </main>
  );
}
