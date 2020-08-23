(function render() {
  var pContainer = document.querySelector(".p-container");
  var detailFragment = document.createDocumentFragment();

  function createElement(type, classList, property) {
    var { text = "", src = "" } = property || {};
    var element = document.createElement(type);
    if (classList) {
      classList.split(" ").forEach((className) => {
        element.classList.add(className);
      });
    }
    if (text) element.innerText = text;
    if (src) element.src = src;
    return element;
  }
  function getDetail(email) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log("the response is ", JSON.parse(this.responseText));
        renderDetail(JSON.parse(this.responseText));
      }

      if (this.readyState == 0) {
        console.log("Nothing is happening");
      }
    };

    xhttp.open(
      "GET",
      "https://frozen-bastion-91456.herokuapp.com/https://ltv-data-api.herokuapp.com/api/v1/records.json?email=doesmith@example.com",
      true
    );
    xhttp.send();
  }

  function getDetailDOM({
    first_name,
    last_name,
    description,
    address,
    email,
    relatives,
    phone_numbers,
  }) {
    var detailContainer = createElement("div", "p-detail-container");
    var detailFlexContainer = createElement("div", "p-detail d-flex");
    var name = createElement("p", "b p-heading-name b", {
      text: first_name + " " + last_name,
    });
    var about = createElement("p", "feature-item-detail", {
      text: description,
    });
    var pDetail = createElement("div", "p-detail d-flex");
    var addressItem = createElement("div", "p-detail-item");
    var addressHeading = createElement("div", "p-detail-item-heading b", {
      text: "Address",
    });
    var addressElement = createElement("div", "feature-item-detail", {
      text: address,
    });

    var emailItem = createElement("div", "p-detail-item");
    var emailHeading = createElement("div", "p-detail-item-heading b", {
      text: "Email",
    });
    var emailElement = createElement("div", "feature-item-detail", {
      text: email,
    });

    var relativeItem = createElement("div", "p-detail-item");
    var relativeHeading = createElement("div", "p-detail-item-heading b", {
      text: "Relatives",
    });
    relativeItem.appendChild(relativeHeading);
    relatives.forEach((relative) => {
      relativeItem.appendChild(createElement("p", "", { text: relative }));
    });

    var phoneItem = createElement("div", "p-detail-item");
    var phoneHeading = createElement("div", "p-detail-item-heading b", {
      text: "Phone Numbers",
    });
    phoneItem.appendChild(phoneHeading);
    phone_numbers.forEach((phone) => {
      phoneItem.appendChild(createElement("p", "b", { text: phone }));
    });

    addressItem.appendChild(addressHeading);
    addressItem.appendChild(addressElement);
    emailItem.appendChild(emailHeading);
    emailItem.appendChild(emailElement);
    detailFlexContainer.appendChild(addressItem);
    detailFlexContainer.appendChild(phoneItem);
    detailFlexContainer.appendChild(emailItem);
    detailFlexContainer.appendChild(relativeItem);

    detailContainer.appendChild(name);
    detailContainer.appendChild(about);
    detailContainer.appendChild(detailFlexContainer);

    return detailContainer;
  }

  function renderDetail(details) {
    if (Array.isArray(details)) {
      console.log("No results found");
    } else {
      var pRootContainer = createElement("div", "d-flex p-container-root");
      var imgContainer = createElement("div");
      var circle = createElement("div", "circle bg-b y");
      var pImage = createElement("img", "p-image");
      pImage.src = "./assets/SVGs/icn_person.svg";
      var detail = getDetailDOM(details);
      circle.appendChild(pImage);
      imgContainer.appendChild(circle);
      pRootContainer.appendChild(imgContainer);
      pRootContainer.appendChild(detail);
      pContainer.appendChild(pRootContainer);
    }
  }

  getDetail();
})();

console.log("HEllo world");
