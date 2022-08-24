$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".nav").toggleClass("nav-toggle");
  });

  $(window).on("load scroll", function () {
    $(".fa-bars").removeClass("fa-times");
    $(".nav").removeClass("nav-toggle");

    if ($(window).scrollTop() > 10) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }
  });

  // $(".facility").magnificPopup({
  //   delegate: "a",
  //   type: "image",
  //   gallery: {
  //     enabled: true,
  //   },
  // });
});

//dark theme

const d = document,
  ls = localStorage;

function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  // console.log($selectors);

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
