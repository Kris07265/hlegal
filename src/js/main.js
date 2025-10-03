import "../scss/style.scss";

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
