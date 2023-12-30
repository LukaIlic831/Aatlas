export const toggleDarkLightMode = (
  lightMode: string,
  setLightMode: React.Dispatch<React.SetStateAction<string>>
) => {
  if (lightMode === "light-theme") {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    setLightMode("dark-theme");
    localStorage.setItem("theme", "dark-theme");
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    setLightMode("light-theme");
    localStorage.setItem("theme", "light-theme");
  }
};
