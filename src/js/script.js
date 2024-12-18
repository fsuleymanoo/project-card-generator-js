const cardSigns = ["♥", "♦", "♠", "♣"];

const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

const random = (array) => array[Math.floor(Math.random() * array.length)];

const cornerLeft = document.querySelector(".card-corner.left");
const cornerRight = document.querySelector(".card-corner.right");
const center = document.querySelector(".card-center");

const cornerText = random(values);
cornerLeft.innerText = cornerText;
cornerRight.innerText = cornerText;

const signs = (center.innerText = random(cardSigns));

const isBlack = signs === "♠" || signs === "♣";
const color = isBlack ? "black" : "red";
cornerLeft.style.color = color;
cornerRight.style.color = color;
center.style.color = color;
