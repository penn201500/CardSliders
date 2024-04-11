import elements from "./sliders.js";

const { slider, sliders } = elements;

const rightMove = () => {
  const firstSlide = slider.removeChild(slider.firstElementChild);
  slider.append(firstSlide);
  slider.children[4].classList.add("fade-in");
  slider.style.justifyContent = "flex-end";
};

const leftMove = () => {
  const lastSlide = slider.removeChild(slider.lastElementChild);
  slider.insertBefore(lastSlide, slider.firstElementChild);
  slider.children[0].classList.add("fade-in");
  slider.style.justifyContent = "flex-start";
};


sliders.forEach((slide) => {
    slide.addEventListener("click", () => {
      const slideIndex = [...slider.children].indexOf(slide);
      console.log(`Here is the slide index: ${slideIndex}`);

      switch (slideIndex) {
        case 0:
          leftMove();
          leftMove();
          break;
        case 1:
          leftMove();
          break;
        case 3:
          rightMove();
          break;
        case 4:
          rightMove();
          rightMove();
          break;
        default:
          break;
      }
    }
)});
