import elements from "./sliders.js";

const { slider, sliders } = elements;
let interval;
let timeout;

const autoSlide = () => {
  interval = setInterval(() => {
    rightMove(false);
  }, 3000);
};

autoSlide();

const stopAutoSlide = (bool) => {
  if (bool) {
    clearInterval(interval);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      autoSlide();
    }, 5000);
  }
};

const rightMove = (bool = true) => {
  const firstSlide = slider.removeChild(slider.firstElementChild);
  slider.append(firstSlide);
  slider.children[4].classList.add("fade-in");
  slider.style.justifyContent = "flex-end";
  stopAutoSlide(bool);
};

const leftMove = (bool = true) => {
  const lastSlide = slider.removeChild(slider.lastElementChild);
  slider.insertBefore(lastSlide, slider.firstElementChild);
  slider.children[0].classList.add("fade-in");
  slider.style.justifyContent = "flex-start";
  stopAutoSlide(bool);
};

sliders.forEach((slide) => {
  slide.addEventListener("click", () => {
    const slideIndex = [...slider.children].indexOf(slide);
    console.log(`Here is the slide index: ${slideIndex}`);

    switch (slideIndex) {
      case 0:
        leftMove();
        setTimeout(function () {
          leftMove();
        }, 500);
        break;
      case 1:
        leftMove();
        break;
      case 3:
        rightMove();
        break;
      case 4:
        rightMove();
        setTimeout(function () {
          rightMove();
        }, 500);
        break;
      default:
        break;
    }
  });
});
