const sliders = [
  {
    id: 1,
    title: "Slider 1",
    description: "This is the first slider",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    title: "Slider 2",
    description: "This is the second slider",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    title: "Slider 3",
    description: "This is the third slider",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 4,
    title: "Slider 4",
    description: "This is the fourth slider",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 5,
    title: "Slider 5",
    description: "This is the fifth slider",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 6,
    title: "Slider 6",
    description: "This is the sixth slider",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 7,
    title: "Slider 7",
    description: "This is the seventh slider",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 8,
    title: "Slider 8",
    description: "This is the eighth slider",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 9,
    title: "Slider 9",
    description: "This is the ninth slider",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 10,
    title: "Slider 10",
    description: "This is the tenth slider",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 11,
    title: "Slider 11",
    description: "This is the eleventh slider",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 12,
    title: "Slider 12",
    description: "This is the twelfth slider",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 13,
    title: "Slider 13",
    description: "This is the thirteenth slider",
    image: "https://via.placeholder.com/600x400",
  },
];

const slider = document.querySelector(".slider");
let card_type = "d"; // diamond

sliders.forEach((slide) => {
  const slideItem = document.createElement("div");
  slideItem.classList.add("slide");
  slideItem.dataset.id = slide.id;
  slideItem.innerHTML = `
    <img src="images/${cardValueToNum(slide.id)}-${card_type}.png" alt="${
    slide.title
  }" class="slide-image"/>
    <div class="slide-content">
      <h2 class="slide-title">${slide.title}</h2>
      <p class="slide-description">${slide.description}</p>
    </div>
  `;
  slider.appendChild(slideItem);
});

// TODO: Add 4 card types: diamond, heart, club, spade
function cardValueToNum(v) {
  const values = [
    "a",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "j",
    "q",
    "k",
  ];
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return isNaN(v) ? nums[values.indexOf(v)] : parseInt(v);
}

const elements = {
  slider,
  sliders: [...slider.children],
  progress: document.querySelector(".progress"),
};

export default elements;
