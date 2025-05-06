const links = ["https://www.qismile.com",
              "https://zenidreney.github.io/portfolio/zenidsearch/"];

console.log(links[1]);

document.getElementById("feat-1").addEventListener("click", function () {
    window.open(links[0], "_blank");
});

document.getElementById("feat-2").addEventListener("click", function () {
    window.open(links[1], "_blank");
});
