// slide de imagenes

$(document).ready(function () {
  $(".facility").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

// animaciones

AOS.init({
  duration: 1000,
});

//dark theme

const d = document,
  ls = localStorage;

function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  let moon = "🌙",
    sun = "🌞";

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));

    $themeBtn.textContent = moon;

    ls.setItem("theme", "light");
  };

  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));

    $themeBtn.textContent = sun;

    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");

    if (ls.getItem("theme") === "light") {
      lightMode();
    }

    if (ls.getItem("theme") === "dark") {
      darkMode();
    }
  });
}

// btn scroll

const doc = document,
  w = window;

function scrollTopButton(btn) {
  const $scrollBtn = doc.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || doc.documentElement.scrollTop;

    if (scrollTop > 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
  });
  doc.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  scrollTopButton(".scroll-top-btn");
});

darkTheme(".dark-theme-btn", "dark-mode");

// loader

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut();

//menu de hamburguesa

function hamburgerMenu(panelBtn, panel, menuLink) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }

    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panels-btn", ".panel", ".menu a");
});
