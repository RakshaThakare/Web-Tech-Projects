const drop = document.querySelector(".drop");
const browse_btn = document.querySelector(".browse_btn");
const fileInput = document.querySelector("#fileInput");

drop.addEventListener("dragover", (E) => {
  E.preventDefault();
  if (!drop.classList.contains("dragged")) {
    drop.classList.add("dragged");
  }
}); //after 50 milli second it will fire on the element
drop.addEventListener("dragleave", () => {
  drop.classList.remove("dragged");
});

drop.addEventListener("drop", (E) => {
  E.preventDefault();
  drop.classList.remove("dragged");
  const files = E.dataTransfer.files;
  console.log(files);
  if (files.length) {
  }
  fileInput.files = files;
});

browse_btn.addEventListener("click", () => {
  fileInput.click();
});
