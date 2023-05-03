// const { data } = require("cheerio/lib/api/attributes");

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

//display champion image//
const apiKey = "RGAPI-6697e72d-349c-4059-8289-21d461a7db46";

function fetchChampionImage(championName) {
  fetch(`https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${championName}.png?api_key=${apiKey}`)
    .then(response => {
      if (response.ok) {
        return response.blob();
      }
      throw new Error("Network response was not ok.");
    })
    .then(blob => {
      const imageUrl = URL.createObjectURL(blob);
      const imageTag = `<img src="${imageUrl}" alt="${championName}">`;
      document.getElementById("championImage").innerHTML = imageTag;
    })
    .catch(error => {
      console.error("Error fetching champion image:", error);
    });
}

// Example usage:
fetchChampionImage("Neeko");
