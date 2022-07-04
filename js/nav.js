let btn = document.querySelector(".button");
nav = document.querySelector(".header .container .links")

btn.onclick = () => {
    nav.classList.toggle("show");
};


// Hide Loading

const loading = document.querySelector(".loading")

function hide() {
    setTimeout(() => {
        loading.classList.add("hidden")
    }, 1000);
}


hide()