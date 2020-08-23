var emailBtn = document.querySelector("#emailBtn");
var inputContainer = document.querySelector(".search-input-container");
var inputFocus = function (e) {
  e.previousElementSibling.classList.add("focus");
};

var inputBlur = function (e) {
  if (!e.value.length) e.previousElementSibling.classList.remove("focus");
};

function validateEmail(email) {
  var regx = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
  if (email.match(regx)) return true;

  return false;
}

emailBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var email = document.querySelector("#emailInput").value;
  if (!validateEmail(email)) {
    let labelElement = document.querySelector("#emailLabel");
    labelElement.classList.add("error-label");
    labelElement.innerHTML = "Please enter correct email address";
  } else window.location.href = `/detail.html?email=${email}`;
});
