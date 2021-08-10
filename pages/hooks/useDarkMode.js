import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function useDarkMode() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return [theme, switchTheme];
}

export default useDarkMode;
