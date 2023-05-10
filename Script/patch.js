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

// CreateElement based on Patch Data
function loadChamp(data){
    champMatch = document.getElementById("block");

    for (i = 0; i < data.lolPatch.length; i++){
        var div = document.createElement("div");
        div.style.width = 351 + "px";
        div.style.height = 105 + "px";
        div.style.backgroundColor = "#2C2C2C";
        div.style.borderRadius = 4 + "px";
        div.style.marginBottom = "10px";
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.style.textAlign = "left";
        div.style.backgroundImage = 'url(' + data.lolPatch[i].champImage + ')';
        div.style.backgroundRepeat = 'no-repeat';
        div.style.backgroundPosition = 'left center';
        div.style.backgroundSize = '67px';

        div.innerHTML = 
        '<span style="color: white">' + '<span style="font-weight: 700">' + '<span style="font-size: 12pt">' 
        + data.lolPatch[i].champName 
        + '</span>'
        + '<br>'
        +  '<span style="color: #C2C2C2">' + '<span style="font-weight: 500">'+ data.lolPatch[i].champDescription;
        + '</span>'
        
        champMatch.appendChild(div);

        //create collapse button
        var collapseButton = document.createElement("button");
        collapseButton.innerHTML = "↓";
        collapseButton.style.marginBottom = "10px";
        collapseButton.addEventListener("click", function(){
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
            this.innerHTML = "↓";
          } else {
            content.style.display = "block";
            this.innerHTML = "↑";
          }
        });

        //set the content within the collapse
        var content = document.createElement("div");
        content.style.backgroundColor = "#2C2C2C";
        content.style.borderRadius = "4px";
        content.style.padding = "10px";
        content.style.display = "none";

        //call the patch note changes from JSON (champSummary)
        var champSummary = document.createElement("span");
        champSummary.innerHTML = data.lolPatch[i].Summary;
        champSummary.style.color = "#C2C2C2";
        champSummary.style.fontSize = "12pt";
        champSummary.style.fontWeight = "500";

        //abilities
        var champAbilities = document.createElement("span");
        champAbilities.innerHTML = data.lolPatch[i].Abilities[i].abilityName;

        //abilityAttributes
        var abilityAttributes = document.createElement("li");
        abilityAttributes.innerHTML = data.lolPatch[i].Abilities[i].Attributes[i].Name;
        abilityAttributes.innerHTML = data.lolPatch[i].Abilities[i].Attributes[i].Label;
        abilityAttributes.innerHTML = data.lolPatch[i].Abilities[i].Attributes[i].Before;
        abilityAttributes.innerHTML = data.lolPatch[i].Abilities[i].Attributes[i].After;

        //ability images
        // var abilityImage = document.createElement("img");
        // champImage.src = 'url(' + data.lolPatch[i].champImage + ')';

        //append content to collapsedDiv
        content.appendChild(champSummary);
        content.appendChild(document.createElement("br"));
        content.appendChild(champAbilities);
        content.appendChild(abilityAttributes);

        //append collapseButton
        div.appendChild(collapseButton);
        div.appendChild(content);
    }
}