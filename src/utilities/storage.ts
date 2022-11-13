const storage = () => {
  localStorage.setItem(
    "colorMode",
    localStorage.colorMode === "dark" ? "light" : "dark"
  );
};

export default storage;
