//collapse
document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementsByClassName("collapse");
  
    btn[0].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });

  //fetch data from JSON
  fetch("/JSON/valPatch.JSON")
  .then(res => res.json())
  .then(data => console.log(data))
  console.log(data);