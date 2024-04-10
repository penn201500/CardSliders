import elements from "./sliders";

const { slider, sliders } = elements;

const rightMove = () => {
  const firstSlide = slider.removeChild(slider.firstElementChild);
  slider.append(firstSlide);
};

const leftMove = () => {
  const lastSlide = slider.removeChild(slider.lastElementChild);
  slider.insertBefore(lastSlide, slider.firstElementChild);
};


