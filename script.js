const allButton = document.querySelector(".all-button");
const animalsButton = document.querySelector(".animals-button");
const plantsButton = document.querySelector(".plants-button");

const mainCategoryButtons = [allButton, animalsButton, plantsButton];
const categoriesPage = document.querySelector(".category-buttons");

const hideMainButtons = () => {
  mainCategoryButtons.forEach((button) => {
    button.style.display = "none";
    categoriesPage.style.display = "none";
  });
};

const showByCategory = (htmlClass) => {
  const allItems = document.querySelectorAll(htmlClass);
  allItems.forEach((item) => {
    item.style.display = "grid";
  });
};

mainCategoryButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    hideMainButtons();
    const dataType = e.target.getAttribute("data-type");
    showByCategory(dataType);
  });
});

// allButton.addEventListener("click", () => {});
