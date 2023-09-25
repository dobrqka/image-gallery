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

const allImageWrappers = document.querySelectorAll(".img-wrapper");
const lightRoom = document.querySelector(".lightroom");
const lightRoomClose = document.querySelector(".close");
const lightRoomPrevious = document.querySelector(".previous");
const lightRoomNext = document.querySelector(".next");

///// previous and next functionality (maybe with data indexes on html elements?)
///// then pimp up how it looks a bit, and move on to adding localstorage
///// on tic-tac-toe so that you can start going through the react basiscs
///// to start building your weather app

// const previousNext = (targetElement) => {
//   lightRoomPrevious.addEventListener("click", () => {
//     document.querySelectorAll(".lightroom img").forEach((image) => {
//       image.remove();
//     });
//     const previousImage =
//       targetElement.previousElementSibling.firstElementChild.cloneNode();
//     lightRoom.appendChild(previousImage);
//   });
// };

// show lightroom

allImageWrappers.forEach((imageWrapper) => {
  imageWrapper.addEventListener("click", (e) => {
    lightRoom.style.display = "grid";
    closeLightroom(lightRoomClose);
    document.querySelectorAll(".lightroom img").forEach((wrapper) => {
      wrapper.remove();
    });
    if (e.target.classList.contains("img-wrapper")) {
      const focusedImage = e.target.firstElementChild.cloneNode();
      lightRoom.appendChild(focusedImage);
      // previousNext(e.target);
    } else {
      const focusedImage = e.target.cloneNode();
      lightRoom.appendChild(focusedImage);
    }
  });
});

// close lightroom

const closeLightroom = (button) => {
  button.addEventListener("click", () => {
    lightRoom.style.display = "none";
    document.querySelectorAll(".lightroom .img-wrapper").forEach((wrapper) => {
      wrapper.remove();
    });
  });
};

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
  if (lightRoom.style.display != "none") {
    closeLightroom(button);
  }
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

// next and previous image in lightroom
