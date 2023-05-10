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

//read lol data
fetch("/JSON/lolPatch.json")
.then(res => res.json())
.then(data => {
    console.log(data.lolPatch[0].Abilities[0].Attributes[0].Name);
    //pass data into loadChamp
    loadChamp(data);
})

function loadChamp(data){
  champMatch = document.getElementById("block");

  for (i = 0; i < data.lolPatch.length; i++){
      var div = document.createElement("div");


      div.innerHTML = 
      //how to add image here??
              '<span style="color: white">' + '<span style="font-weight: 700">' + '<span style="font-size: 12pt">' 
              + data.lolPatch[i].champName 
              + '</span>'
              + '<br>'
              +  '<span style="color: #C2C2C2">' + '<span style="font-weight: 500">'+ data.lolPatch[i].champDescription;
              + '</span>'
      
      div.style.width = 351 + "px";
      div.style.backgroundColor = "#2C2C2C";
      div.style.borderRadius = 4 + "px";
      div.style.marginBottom = "10px";
    

      // create collapse/expand button
      var collapseButton = document.createElement("button");
      collapseButton.innerHTML = "Expand";
      collapseButton.style.marginBottom = "10px";
      collapseButton.addEventListener("click", function() {
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
              content.style.display = "none";
              this.innerHTML = "Expand";
          } else {
              content.style.display = "block";
              this.innerHTML = "Collapse";
          }
      });

      // create champ image
      var champImage = document.createElement("img");
      champImage.src = "https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/" 
      + data.lolPatch[i].champName + ".png";
      champImage.style.width = "45px";



      // create champ name
      var champName = document.createElement("span");
      champName.innerHTML = data.lolPatch[i].champName;
      champName.style.color = "white";
      champName.style.fontWeight = "700";
      champName.style.fontSize = "12pt";

      // create champ description
      var champDescription = document.createElement("span");
      champDescription.innerHTML = data.lolPatch[i].champDescription;
      champDescription.style.color = "#C2C2C2";
      champDescription.style.fontWeight = "500";

      // create content div
      var contentDiv = document.createElement("div");
      contentDiv.style.padding = "10px";
      contentDiv.style.display = "none";

      //Summary
        var champSummary = document.createElement("span");
        champSummary.innerHTML = data.lolPatch[i].Summary;
        champSummary.style.color = "#C2C2C2";
        champSummary.style.fontSize = "12pt";
        champSummary.style.fontWeight = "500";

      // append everything to content Div
          contentDiv.appendChild(champSummary);
 
// create champ abilities
for (j = 0; j < data.lolPatch[i].Abilities.length; j++){
  // abilityName
  var champAbilities = document.createElement("span");
  champAbilities.innerHTML = data.lolPatch[i].Abilities[j].abilityName;
  champAbilities.style.color = "#C2C2C2";
  champAbilities.style.fontWeight = "500";
  champAbilities.style.fontSize = "12pt";

  // create ability attributes
  var abilityAttributes = document.createElement("ul");
  abilityAttributes.style.listStyleType = "none";

  for (k = 0; k < data.lolPatch[i].Abilities[j].Attributes.length; k++){
      var attribute = document.createElement("li");
      attribute.innerHTML = data.lolPatch[i].Abilities[j].Attributes[k].Name + ": " 
          + data.lolPatch[i].Abilities[j].Attributes[k].Before 
          + " -> " 
          + data.lolPatch[i].Abilities[j].Attributes[k].After;
      attribute.style.color = "#C2C2C2";
      attribute.style.fontWeight = "500";
      attribute.style.fontSize = "10pt";

      abilityAttributes.appendChild(attribute);
  }

  // create ability div
  var abilityDiv = document.createElement("div");
  abilityDiv.style.marginBottom = "10px";
  abilityDiv.appendChild(champAbilities);
  abilityDiv.appendChild(document.createElement("br"));
  abilityDiv.appendChild(abilityAttributes);


      // append ability div to content div
      contentDiv.appendChild(abilityDiv);
      

      // append collapse button and content div to main div
      div.appendChild(champImage);
      div.appendChild(collapseButton);
      div.appendChild(contentDiv);

      champMatch.appendChild(div);
    }
  }
}