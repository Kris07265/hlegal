import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "../scss/style.scss";

const teamSwiper = new Swiper(".team__swiper", {
  modules: [Pagination, Autoplay],
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: ".team__swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 2000,
  },
});

(() => {
  const burgerButton = document.querySelector(".header__box-burger");
  const closeMenuButton = document.querySelector(".header__nav-close");
  const headerNavigation = document.querySelector(".header__nav");

  burgerButton.addEventListener("click", () => {
    headerNavigation.classList.add("active");
  });

  closeMenuButton.addEventListener("click", () => {
    headerNavigation.classList.remove("active");
  });
})();

(() => {
  const tabItems = document.querySelectorAll(".tabs__links-item");
  const tabContent = document.querySelectorAll(".tabs__content-item");

  tabItems.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabContent.forEach((content) => {
        content.classList.remove("active");
      });

      tabItems.forEach((item) => {
        item.classList.remove("active");
      });

      tabItems[index].classList.add("active");
      tabContent[index].classList.add("active");
    });
  });
})();
