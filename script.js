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

// hides category buttons
const hideCategoryButtons = (categoryArray) => {
  categoryArray.forEach((button) => {
    button.style.display = "none";
    categoriesPage.style.display = "none";
  });
};

// shows images by currently clicked category
const showByCategory = (htmlClass) => {
  const allItems = document.querySelectorAll(htmlClass);
  allItems.forEach((item) => {
    item.style.display = "grid";
  });
};

// shows subcategories or images
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

// create an array of currently displayed images
const createImagesArray = () => {
  let currentImages = [];
  allImageWrappers.forEach((wrapper) => {
    if (wrapper.hasAttribute("style")) {
      const currentImage = wrapper.firstElementChild;
      currentImages.push(currentImage);
    }
  });
  return { imagesArray: currentImages };
};

// show next image in lightroom
lightRoomNext.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  const visibleImages = createImagesArray().imagesArray;
  for (let i = 0; i < visibleImages.length; i++) {
    if (visibleImages[i].src == lightRoom.lastElementChild.src) {
      const nextImage = visibleImages[i + 1].cloneNode();
      lightRoom.removeChild(lightRoom.lastElementChild);
      lightRoom.appendChild(nextImage);
      return;
    }
  }
});

// show previous image in lightroom
lightRoomPrevious.addEventListener("click", () => {
  const visibleImages = createImagesArray().imagesArray;
  visibleImages.forEach((image) => {
    if (image.src == lightRoom.lastElementChild.src) {
      if (visibleImages.indexOf(image) == 0) {
        return;
      }
      const previousImage =
        visibleImages[visibleImages.indexOf(image) - 1].cloneNode();
      console.log(previousImage);
      lightRoom.removeChild(lightRoom.lastElementChild);
      lightRoom.appendChild(previousImage);
    }
  });
});

// show lightroom
allImageWrappers.forEach((imageWrapper) => {
  imageWrapper.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    lightRoom.style.display = "grid";
    closeLightroom(lightRoomClose);
    document.querySelectorAll(".lightroom img").forEach((wrapper) => {
      wrapper.remove();
    });
    if (e.target.classList.contains("img-wrapper")) {
      const focusedImage = e.target.firstElementChild.cloneNode();
      lightRoom.appendChild(focusedImage);
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

// shows category buttons of previous page
const showCategoryButtons = (buttonsArray) => {
  buttonsArray.forEach((button) => {
    button.style.display = "block";
    categoriesPage.style.display = "grid";
  });
};

const allImages = document.querySelectorAll(".all");
// hides images when clicking on 'back'
const hideImages = () => {
  allImages.forEach((image) => {
    image.removeAttribute("style");
  });
};

// remove inline style="display:grid" from images when hitting 'back'
const removeStyleDisplay = () => {
  allImageWrappers.forEach((wrapper) => {
    wrapper.removeAttribute("style");
  });
};

// helper function to tidy up 'if' conditions in next function
const classCheck = (className) => {
  return galleryPage.classList.contains(className);
};

// back button shows previous categories
[backButton, backButtonTwo].forEach((button) => {
  if (lightRoom.style.display != "none") {
    closeLightroom(button);
  }
  button.addEventListener("click", () => {
    if (
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
      removeStyleDisplay();
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
      removeStyleDisplay();
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
      removeStyleDisplay();
    }
  });
});
