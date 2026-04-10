document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-icon");
  const dropdown = document.querySelector(".dropdown");

  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    // If click is NOT inside dropdown or menu button
    if (!dropdown.contains(e.target) && !menuBtn.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });

  const navbar = document.querySelector(".main-navigation");
  const hero = document.querySelector(".hero-section");

  window.addEventListener("scroll", () => {
    const heroHeight = hero.offsetHeight;

    if (window.scrollY > heroHeight - 100) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

  new Splide("#explore-splide", {
    type: "loop",
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    perPage: 1,
    arrows: true,
    pagination: true,
    cover: true,
    heightRatio: 0.6,
  }).mount();

  // STYLE CARD SLIDER
  new Splide(".style-slider", {
    perPage: 3,
    gap: "2rem",
    arrows: true,
    pagination: false,

    breakpoints: {
      1200: { perPage: 2 },
      768: { perPage: 1 },
    },
  }).mount();

  new Splide("#testimonialsSplide", {
    type: "loop",
    perPage: 2,
    gap: "3rem",
    autoplay: true,
    pauseOnHover: true,
    breakpoints: {
      1200: { perPage: 2 },
      768: { perPage: 1 },
      480: { perPage: 1 },
    },
  }).mount();
});
