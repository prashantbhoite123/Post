const count = document.querySelector(".count");
const FollowBtn = document.querySelector("#FollowBtn");
const doubleHeart = document.querySelector(".double");
const imageCon = document.querySelector(".image_con");
console.log(imageCon);
FollowBtn.addEventListener("click", (e) => {
  e.target.innerHTML === "Unfollow"
    ? (e.target.innerHTML = "Follow")
    : (e.target.innerHTML = "Unfollow");
});

const threeDot = document.querySelector("#icone_con i");
console.log(threeDot);
const objectCon = document.querySelector(".object_content");
const body = document.body;

body.addEventListener("click", () => {
  objectCon.classList.remove("hide");
});

threeDot.addEventListener("click", (e) => {
  e.stopPropagation();
  objectCon.classList.toggle("hide");
});

const heartIcone = document.querySelector(".back-heart");
console.log(heartIcone);

heartIcone.addEventListener("click", (e) => {
  console.log("heart was clicked");
  e.target.classList.toggle("heart");
  // count.innerHTML === 0 ? (count.innerHTML = 1) : (count.innerHTML = 0);
  // console.log(count.innerHTML);
  count.innerHTML == 0 ? (count.innerHTML = 1) : (count.innerHTML = 0);
});

imageCon.addEventListener("dblclick", (e) => {
  // console.log("image was clicked");
  doubleHeart.classList.add("double-hide");
  heartIcone.classList.add("heart");
  count.innerHTML == 0 ? (count.innerHTML = 1) : (count.innerHTML = 1);
  setTimeout(() => {
    doubleHeart.classList.remove("double-hide");
  }, 1500);
});
