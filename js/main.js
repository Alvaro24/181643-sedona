var link = document.querySelector(".btn-interesting");
var indexForm = document.querySelector(".index-form");
var indexMap = document.querySelector(".index-map");

link.addEventListener("click", function(event) {
  event.preventDefault();
  indexForm.classList.toggle("index-form-show");
});

indexMap.addEventListener("click", function(event) {
  event.preventDefault();
  indexForm.classList.remove("index-form-show");
});
