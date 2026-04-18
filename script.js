document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");
  const closeMenu = document.getElementById("closeMenu");

  hamburger.addEventListener("click", () => {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
  });

  overlay.addEventListener("click", closeNav);
  closeMenu.addEventListener("click", closeNav);

  function closeNav() {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  }

  const navbar = document.querySelector(".main-navigation");
  const hero = document.querySelector(".hero-section");

  if (hero && navbar) {
    window.addEventListener("scroll", () => {
      const heroBottom = hero.getBoundingClientRect().bottom;

      if (heroBottom <= 0) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });
  }

  const searchIcon = document.querySelector(".search-icon");
  const searchModal = document.getElementById("searchModal");
  const closeSearch = document.getElementById("closeSearch");

  searchIcon.addEventListener("click", (e) => {
    e.preventDefault();
    searchModal.classList.add("active");
  });

  closeSearch.addEventListener("click", () => {
    searchModal.classList.remove("active");
  });

  // close when clicking outside box
  searchModal.addEventListener("click", (e) => {
    if (e.target === searchModal) {
      searchModal.classList.remove("active");
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
