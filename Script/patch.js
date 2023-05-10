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
    console.log(data);
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
        collapseButton.innerHTML = "collapse";
        collapseButton.style.marginBottom = "10px";
        collapseButton.addEventListener("click", function(){
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
            this.innerHTML = "Show";
          } else {
            content.style.display = "block";
            this.innerHTML = "Expand";
          }
        });

        //set the content within the collapse
        var content = document.createElement("div");
        content.style.backgroundColor = "#2C2C2C";
        content.style.borderRadius = "4px";
        content.style.padding = "10px";
        content.style.display = "none";

        //call the patch note changes from JSON
        var champ
    }
}