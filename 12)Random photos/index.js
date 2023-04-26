const imageContainerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imageNum = 3;
  addNewImages();
  
});

function addNewImages() {
  for (let index = 1; index <= imageNum; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `images/${Math.floor(
        Math.random() * 70
      )}.jpg`;
    imageContainerEl.append(newImgEl);
  }
};
/*btnEl.addEventListener("click", () => {
  imageNum = 70;
  addNewImages();
});

function addNewImages() {
  for (let index = 1; index <= imageNum; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `images/${index}.jpg`;
    imageContainerEl.append(newImgEl);
  }
};*/
