"use strict";

const baseURL = "https://64ae50c5c85640541d4ccb47.mockapi.io/sneakers";

function createPost() {
  const newPost = {
    phoneNumber: $("#phone").value,
    name: $("#name").value,
  };
  fetch(`${baseURL}/exam`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((arr) => console.log("err", arr))
    .finally(() => console.log("success"));
}

$("#sentInfo").addEventListener("submit", (e) => {
  e.preventDefault();
  createPost();
  $("#phone").value = "";
  $("#name").value = "";
  $("#modal").classList.remove('block')
  $('#modal2').classList.remove('hidden')
});

$("#modalBtn").addEventListener("click", () => {
  $("#modal").classList.add("block");
  $("#modal2").classList.add("hidden");
  $("#closeBtnBack").classList.add("block");
  document.body.style.overflowY = "hidden";
});

$("#closeBtn").addEventListener("click", () => {
  $("#modal").classList.remove("block");
  $("#closeBtnBack").classList.remove("block");

  document.body.style.overflowY = "scroll";
});
$("#closeBtn2").addEventListener("click", () => {
  $("#modal2").classList.add("hidden");
  $("#closeBtnBack").classList.remove("block");
  

  document.body.style.overflowY = "scroll";
});
$("#closer").addEventListener("click", () => {
  $("#modal2").classList.add("hidden");
  $("#closeBtnBack").classList.remove("block");

  document.body.style.overflowY = "scroll";
});

$("#closeBtnBack").addEventListener("click", () => {
  console.log("clicked");
  $("#closeBtnBack").classList.remove("block");
  $("#closeBtnBack").classList.add("hidden");
  $("#modal").classList.remove("block");
  $("#modal2").classList.remove("block");
  $("#modal2").classList.add("hidden");
  document.body.style.overflowY = "scroll";
  
});

// $('#sentInfo').addEventListener('click', () => {
//   if($('#phone').value !== "" && $('#name').value !== ""){

//   }
// })
