const allButton = document.querySelector(".all-button");
const animalsButton = document.querySelector(".animals-button");
const plantsButton = document.querySelector(".plants-button");
const allAnimalsButton = document.querySelector(".all-animals-button");
const catsButton = document.querySelector(".cat-button");
const dogsButton = document.querySelector(".dog-button");
const hensButton = document.querySelector(".hen-button");
const allPlantsButton = document.querySelector(".hen-button");
const tomatoButton = document.querySelector(".tomato-button");
const eggplantButton = document.querySelector(".eggplant-button");

const mainCategoryButtons = [allButton, animalsButton, plantsButton];
const animalCategoryButtons = [
  allAnimalsButton,
  catsButton,
  dogsButton,
  hensButton,
];
const plantCategoryButtons = [allPlantsButton, tomatoButton, eggplantButton];

const allCategoryButtons = mainCategoryButtons.concat(
  animalCategoryButtons,
  plantCategoryButtons
);

const categoriesPage = document.querySelector(".category-buttons");

// used when you click on a category
const hideCategoryButtons = (categoryArray) => {
  categoryArray.forEach((button) => {
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

allCategoryButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const dataType = e.target.getAttribute("data-type");
    if (e.target.classList.contains("end")) {
      hideCategoryButtons(mainCategoryButtons);
      showByCategory(dataType);
    } else {
      if (dataType == ".animals") {
        hideCategoryButtons(mainCategoryButtons);
        showCategoryButtons(animalCategoryButtons);
      } else if (dataType == ".plants") {
        hideCategoryButtons(mainCategoryButtons);
        showCategoryButtons(plantCategoryButtons);
      }
    }
  });
});

// used in "Back to Home" button
const showCategoryButtons = (buttonsArray) => {
  buttonsArray.forEach((button) => {
    button.style.display = "block";
    categoriesPage.style.display = "grid";
  });
};

const allImages = document.querySelectorAll(".all");
// used for "back to home"
const hideImages = () => {
  allImages.forEach((image) => {
    image.style.display = "none";
  });
};

const backButton = document.querySelector(".back-button");
// back to home
backButton.addEventListener("click", () => {
  showCategoryButtons(mainCategoryButtons);
  hideImages();
});
