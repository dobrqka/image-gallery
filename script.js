const allButton = document.querySelector(".all-button");
const animalsButton = document.querySelector(".animals-button");
const plantsButton = document.querySelector(".plants-button");
const allAnimalsButton = document.querySelector(".all-animals-button");
const catsButton = document.querySelector(".cat-button");
const dogsButton = document.querySelector(".dog-button");
const hensButton = document.querySelector(".hen-button");
const allPlantsButton = document.querySelector(".all-plants-button");
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
const backButton = document.querySelector(".back-button");
const backButtonTwo = document.querySelector(".back-button2");
const galleryPage = document.querySelector(".galleries");

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
    backButton.style.display = "block";
    const dataType = e.target.getAttribute("data-type");
    if (e.target.classList.contains("end")) {
      hideCategoryButtons(mainCategoryButtons);
      showByCategory(dataType);
      backButtonTwo.style.display = "block";
      galleryPage.className = "galleries";
      galleryPage.classList.add(dataType);
    } else {
      if (dataType == ".animals") {
        hideCategoryButtons(mainCategoryButtons);
        showCategoryButtons(animalCategoryButtons);
        galleryPage.classList.add("all-animals");
      } else if (dataType == ".plants") {
        hideCategoryButtons(mainCategoryButtons);
        showCategoryButtons(plantCategoryButtons);
        galleryPage.classList.add("all-plants");
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

// back to home

const classCheck = (className) => {
  return galleryPage.classList.contains(className);
};

[backButton, backButtonTwo].forEach((button) => {
  button.addEventListener("click", () => {
    if (
      // galleryPage.classList.contains(".all") ||
      // galleryPage.classList.contains("all-animals") ||
      // galleryPage.classList.contains("all-plants")
      classCheck(".all") ||
      classCheck("all-animals") ||
      classCheck("all-plants")
    ) {
      hideCategoryButtons(allCategoryButtons);
      showCategoryButtons(mainCategoryButtons);
      hideImages();
      backButton.style.display = "none";
      backButtonTwo.style.display = "none";
      galleryPage.className = "galleries";
      console.log("hey");
    } else if (
      classCheck(".animals") ||
      classCheck(".cats") ||
      classCheck(".dogs") ||
      classCheck(".hens")
    ) {
      hideImages();
      showCategoryButtons(animalCategoryButtons);
      galleryPage.className = "galleries";
      galleryPage.classList.add("all-animals");
      backButtonTwo.style.display = "none";
    } else if (
      classCheck(".plants") ||
      classCheck(".tomatoes") ||
      classCheck(".eggplants")
    ) {
      hideImages();
      showCategoryButtons(plantCategoryButtons);
      galleryPage.className = "galleries";
      galleryPage.classList.add("all-plants");
      backButtonTwo.style.display = "none";
    }
  });
});
