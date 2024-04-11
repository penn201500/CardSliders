import elements from "./sliders.js";

const { slider, sliders, progress } = elements;
let interval;
let timeout;
let progressInterval;

progress.children[1].textContent = `- ${slider.children.length}`;
const autoSlide = () => {
  interval = setInterval(() => {
    rightMove(false);
  }, 5000);
};

autoSlide();

const stopAutoSlide = (boolVal) => {
  if (boolVal) {
    clearInterval(interval);
    clearTimeout(timeout);
    clearInterval(progressInterval);
    progressBar(10);
    timeout = setTimeout(() => {
      autoSlide();
    }, 5000);
  }
  progress.firstElementChild.textContent = slider.children[2].dataset.id;
};

const progressBar = (percent) => {
  let i = 10;
  progressInterval = setInterval(() => {
    progress.lastElementChild.style.width = `${(i += percent)}%`;
    console.log(`Here is the progress: ${i}`);
    if (i === 110) {
      i = 0;
      clearInterval(progressInterval);
      progress.lastElementChild.style.width = i;
    }
  }, 1000);
}

const rightMove = (boolVal = true) => {
  const firstSlide = slider.removeChild(slider.firstElementChild);
  slider.append(firstSlide);
  slider.children[4].classList.add("fade-in");
  slider.style.justifyContent = "flex-end";
  stopAutoSlide(boolVal);
};

const leftMove = (boolVal = true) => {
  const lastSlide = slider.removeChild(slider.lastElementChild);
  slider.insertBefore(lastSlide, slider.firstElementChild);
  slider.children[0].classList.add("fade-in");
  slider.style.justifyContent = "flex-start";
  stopAutoSlide(boolVal);
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

const leftControl = document.querySelector(".left-control");
leftControl.addEventListener("click", leftMove);

const rightControl = document.querySelector(".right-control");
rightControl.addEventListener("click", rightMove);
