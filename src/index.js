var baseUrl =
  "http://proadvisor.intuit.com/app/accountant/search?region=ca&distance=50";
var url = baseUrl;
var searchBtn = document.getElementById("accountant-cta");
var input = document.getElementById("postal-code");
searchBtn.onclick = function (e) {
  e.preventDefault();
  addLocation();
  window.open(url);
  console.log(url);
  url = baseUrl;
};
input.onkeypress = function (e) {
  if (e.which === 13) {
    addLocation();
    window.open(url);
    console.log(url);
    url = baseUrl;
    return false;
  }
};

function addLocation() {
  var location = document.getElementById("postal-code").value;
  if (input.value.length > 0) {
    url = url + "&location=" + location;
  }
}
