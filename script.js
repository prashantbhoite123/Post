const FollowBtn = document.querySelector("#FollowBtn");

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

const heartIcone = document.querySelector(".fa-heart");
console.log(heartIcone);
const count = document.querySelector(".count");

heartIcone.addEventListener("click", (e) => {
  e.target.classList.toggle("heart");
  e.target.classList[2] === "heart"
    ? (count.innerHTML = 1)
    : (count.innerHTML = 0);
});
