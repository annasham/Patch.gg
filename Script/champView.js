const apiKey = "RGAPI-d6e9fd13-38d6-4c13-9dca-df11e11d60b8";
const champNameInput = document.getElementById("champName");
const champSplash = document.getElementsByClassName("champSplash");

function fetchChampionSplash(champName) {

  fetch(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg?api_key=${apiKey}`)
    .then(response => {
      if (response.ok) {
        return response.blob();
      }
      throw new Error("Network response was not ok.");
    })
    .then(blob => {
      const imageUrl = URL.createObjectURL(blob);
      const imageTag = `<img src="${imageUrl}" alt="${champName}" style="width: 350px; height: 227px; border-radius: 4%;">`;
      champSplash[0].innerHTML = imageTag;
    })
    .catch(error => {
      console.error("Error fetching champion image:", error);
    });
};

// Example usage:
fetchChampionSplash("Neeko");


// var patchChamp = document.getElementById("champName");
//fetches JSON data
fetch('/JSON/lolPatch.JSON')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
              console.log(data.lolPatch[0].champName);
              appendData(data);
            });

function appendData(data){
  showChamp = document.getElementById("champName");
  for (i = 0; i < data.lolPatch.length; i++){
    var div = document.createElement("div");
    div.innerHTML = 'Patch Notes on ' + data.lolPatch[i].champName;
    showChamp.appendChild(div);
  }
}
