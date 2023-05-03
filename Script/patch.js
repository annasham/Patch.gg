// const { data } = require("cheerio/lib/api/attributes");
//fetch data
fetch('https://ddragon.leagueoflegends.com/cdn/13.9.1/data/en_US/champion/Neeko.json')
  .then(response => response.json())
  .then(data => console.log(data));

//collapse for patch highlights
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

//collapse for champion blocks
// const champDropBtn = document.querySelector('.champDrop');
// const changesDiv = document.querySelector('.changes');

// champDropBtn.addEventListener('click', function() {
//   if (changesDiv.style.display === 'none') {
//       changesDiv.style.display = 'block';
//   } else {
//       changesDiv.style.display = 'none';
//   }
// });
    
//display champion image//
const apiKey = "RGAPI-6697e72d-349c-4059-8289-21d461a7db46";
const champName = document.getElementById("champName");

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
      const imageTag = `<img src="${imageUrl}" alt="${championName}"style="width: 67px; height: 67px; border-radius: 4%;">`;
      document.getElementById("championImage").innerHTML = imageTag;
    })
    .catch(error => {
      console.error("Error fetching champion image:", error);
    });
}

// Example usage:
fetchChampionImage("Neeko");


// //fetch data
// const fetch = require("node-fetch");
// const cheerio = require("cheerio");

// //get Data
// const getRiotData = (URL) => {
//     return fetch(URL)
//     .then((response) => response.text())
//     .then((data) => {
//         return data;
//     });
// };

// //patch notes URL
// const URL = "https://www.leagueoflegends.com/en-us/news/game-updates/patch-13-9-notes/";

// //run program
// const getPatchData = async () => {
//     const patchData = await getRiotData(URL);
// }

// //parse data
// const parsedpatchData = cheerio.load(patchData);

