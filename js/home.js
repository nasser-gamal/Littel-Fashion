const images = document.querySelectorAll(".landing-info");
const circles = document.querySelectorAll(".landing .info span");
let countt = 1;

// Big Boss 
function hideAndShow() {
  setInterval(() => {
    addClass();
    circlesClass();
    countt++;
    if (countt === images.length) {
      countt = 0;
    }
  }, 3000);
  clicked();
}

hideAndShow();

// Add Class Active To show The image
function addClass() {
  images.forEach((img) => {
    img.classList.remove("active");
  });
  images[countt].classList.add("active");
}

// Add Class Active To Circle
function circlesClass() {
  circles.forEach((circle) => {
    circle.classList.remove("active");
  });
  circles[countt].classList.add("active");
}

// Show Image After Circle clicked
function clicked() {
  circles.forEach((circle) => {
    circle.onclick = () => {
      countt = circle.dataset.curr - 1;
      addClass();
      circlesClass();
    };
  });
}

// Intrduction
let img = Array.from(
  document.querySelectorAll(
    ".introduction .container .introduction-content img"
  )
);
let text = Array.from(
  document.querySelectorAll(
    ".introduction .container .introduction-content .text"
  )
);
let links = document.querySelectorAll(
  ".introduction .container .introduction-content ul li"
);

let count = 1;

checker();

function checker() {
  removeAllClasses();
  img[count - 1].classList.add("active");
  links[count - 1].classList.add("active");
  text[count - 1].classList.add("active");
}

function removeAllClasses() {
  img.forEach(function (img) {
    img.classList.remove("active");
  });
  links.forEach(function (li) {
    li.classList.remove("active");
  });
  text.forEach(function (tx) {
    tx.classList.remove("active");
  });
}

click();
function click() {
  links.forEach(function (li) {
    li.onclick = function () {
      count = parseInt(this.getAttribute("data-count"));
      checker();
    };
  });
}





