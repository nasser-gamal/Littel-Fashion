let cartBtn = document.querySelector(".product .container .product-content .col .info .cart .add");
check = document.querySelector(".check")
cardContent = document.querySelector(".check .card .card-content");
let cardChi = Array.from(cardContent.children)



cartBtn.onclick = function () {
  cardContent.classList.toggle("active");
  check.classList.toggle("active");
  document.body.style.overflow = "hidden";
  };


document.querySelector("select").onchange = function () {
  document.querySelector(
    ".check .card .card-content .text span span"
    ).innerHTML = document.querySelector("select").value;
};

document.addEventListener("click", (e) => {
  e.stopPropagation()
  if (e.target !== cardContent && e.target !== cartBtn) {
    if (cardContent.classList.contains("active")) {
      cardContent.classList.remove("active")
      check.classList.toggle("active");
    }
  }
})

cardChi.forEach((card) => {
  card.onclick = (e) => {
    e.stopPropagation()
  }
})
