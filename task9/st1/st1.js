let content = document.querySelector(".content");
let mode = document.querySelector(".mode");

document.body.classList.add("light-mode");

mode.addEventListener("click", () => {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    mode.textContent = "light mode";
    console.log("darkmodeadded");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    mode.textContent = "dark mode";
    console.log("lightmodeadded");
  }
});
