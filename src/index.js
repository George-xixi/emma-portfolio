const invertSwitch = document.getElementById("checkbox");
const root = document.querySelector(':root');
const documentIcon = document.getElementById("document-icon");
const likeIcon = document.getElementById("like-icon");
const keyIcon = document.getElementById("key-icon");
const starIcon = document.getElementById("star-icon");

invertSwitch.addEventListener("change", (event) => {
  const isChecked = event.target.checked;
  console.log(isChecked, "event");
  if (isChecked) {
    root.style.setProperty("--main-colour", "#ffff");
    root.style.setProperty("--accent-colour", "#02028E");
    documentIcon.src = "./images/document-icon.png";
    likeIcon.src = "./images/like-icon.png";
    keyIcon.src = "./images/key-icon.png";
    starIcon.src = "./images/star-icon.png";
  } else {
    root.style.setProperty("--main-colour", "#02028E");
    root.style.setProperty("--accent-colour", "#ffff");
    documentIcon.src = "./images/document-icon-blue.png";
    likeIcon.src = "./images/like-icon-blue.png";
    keyIcon.src = "./images/key-icon-blue.png";
    starIcon.src = "./images/star-icon-blue.png";
  }
});