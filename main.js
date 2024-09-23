const buttons = document.querySelectorAll(".scrollButton");

buttons.forEach((button) => {
  button.onclick = function () {
    scrollToTop();
  };
});

function scrollToTop() {
  let scrollStep = -window.scrollY / (1000 / 15),
    scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else clearInterval(scrollInterval);
    }, 15);
}

function toggleDarkMode() {
  const isDark = document.body.style.backgroundColor === "rgb(18, 18, 18)";

  if (isDark) {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
  } else {
    document.body.style.backgroundColor = "#121212";
    document.getElementsByClassName("").style.color = "#ffffff";
  }

  localStorage.setItem("darkMode", !isDark ? "enabled" : "disabled");
}

document.addEventListener("DOMContentLoaded", () => {
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === "enabled") {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffffff";
  }
});
