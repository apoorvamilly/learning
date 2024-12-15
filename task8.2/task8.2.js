// text-section
let text_content = document.querySelector(".text_content");
let expand = document.querySelector(".expand");

expand.addEventListener("click", () => {
  if (
    text_content.style.display === "none" ||
    text_content.style.display === ""
  ) {
    text_content.style.display = "block";
    expand.textContent = "Hide Text";
  } else {
    text_content.style.display = "none";
    expand.textContent = "show text";
  }
});

//like-button
let like = document.querySelector(".like");
let like_symbol = document.querySelector(".like_symbol");
let counter = document.querySelector("#counter");
let count = 0;
let para = document.createElement("p");
like.addEventListener("click", () => {
  count = count + 1;
  console.log(count);
  para.innerText = count;
  like.appendChild(para);
});

// faq section
let qn = document.querySelectorAll(".qn");
let ans = document.querySelectorAll(".ans");

qn.forEach((qn, index) => {
  qn.addEventListener("click", () => {
    if (
      ans[index].style.display === "none" ||
      ans[index].style.display === ""
    ) {
      ans[index].style.display = "block";
    } else {
      ans[index].style.display = "none";
    }
  });
});
