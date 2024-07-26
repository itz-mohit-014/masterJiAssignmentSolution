const boxes = document.getElementsByClassName("boxes");
const dragImg = document.getElementsByClassName("img-drag");

for (let i = 0; i < dragImg.length; i++) {
  dragImg[i].addEventListener("dragstart", dragStarting);
  dragImg[i].addEventListener("dragend", dragEnd);
}

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("dragover", dragOver);
  boxes[i].addEventListener("dragenter", dragEnter);
  boxes[i].addEventListener("dragleave", dragLeave);
  boxes[i].addEventListener("drop", dropingEl);
}

function dragStarting(e) {
    e.target.style.transform = "translateX(1rem)";
}

function dragEnd(e) {
  e.target.style.transform = "translateX(0px)";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  e.currentTarget.style.transform = "scale(1.095)";
}

function dragLeave(e) {
  e.currentTarget.style.transform = "scale(1)";
}

function dropingEl(e) {
  e.preventDefault();
  e.currentTarget.style.transform = "scale(1)";

  // Select the dragged image from the collection
  const draggedImage = document.querySelector(".img-drag.dragging");

  // Append the dragged image to the drop target
  this.innerHTML = "";
  this.appendChild(draggedImage);
}