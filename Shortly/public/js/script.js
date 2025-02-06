const input = document.querySelector("#link-input");
const linkForm = document.querySelector("#link-form");
const errMsg = document.querySelector("#err-msg");
const hamburger = document.querySelector("#ham-btn");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", navToggle);

linkForm.addEventListener("submit", formSubmit);

function validUrl(url) {
  const urlRegex = new RegExp(
    "^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+).[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$"
  );
  return urlRegex.test(url);
}

function formSubmit(e) {
  e.preventDefault();
  const url = input.value;

  if (url === "") {
    errMsg.textContent = "Please add a link";
    input.classList.add("border-red");
  } else if (!validUrl(url)) {
    errMsg.textContent = "Please add a valid link";
    input.classList.add("border-red");
  } else {
    errMsg.style.display = "none";
    input.classList.remove("border-red-500");
    input.value = "";
    alert("Link shortened successfully");
  }
}

function navToggle() {
  hamburger.classList.toggle("open");
  menu.classList.toggle("flex");

  if (menu.classList.contains("flex")) {
    menu.classList.remove("hidden");
    menu.classList.add("slidein");
  } else {
    menu.classList.add("slideout");
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 500);
  }

  setTimeout(() => {
    menu.classList.contains("flex")
      ? menu.classList.remove("slidein")
      : menu.classList.remove("slideout");
  }, 500);

  menu.classList.contains("flex")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");
}
