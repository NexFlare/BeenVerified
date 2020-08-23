(function render() {
  function getDetail(email) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log("the response is ", this.responseText);
      }
      if (this.readyState == 3) {
        console.log("Processing request ", this.responseText);
      }
      if (this.readyState == 1) {
        console.log("Connection establised ", this.responseText);
      }

      if (this.readyState == 0) {
        console.log("Nothing is happening");
      }
    };
    xhttp.open(
      "GET",
      "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=doesmith@example.com",
      true
    );
    xhttp.setRequestHeader(
      "Access-Control-Allow-Origin",
      "http://127.0.0.1:5500"
    );
    xhttp.setRequestHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, OPTIONS"
    );
    xhttp.setRequestHeader("Access-Control-Allow-Credentials", "true");
    xhttp.setRequestHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    xhttp.send();

    fetch(
      "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=doesmith@example.com"
    )
      .then((res) => res.json())
      .then(console.log);
  }

  getDetail();

  console.log("The email is ");
})();

console.log("HEllo world");
