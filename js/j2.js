document.addEventListener("DOMContentLoaded", function(event) {

var thumbnailElement = document.getElementById("smart_thumbnail2");
      thumbnailElement.addEventListener("click", function() {
  if (thumbnailElement.className == "") {
      thumbnailElement.className = "small";
} else {
      thumbnailElement.className = "";
}

});
});
