
//read lol data
fetch("/JSON/lolPatch.json")
.then(res => res.json())
.then(data => {
    console.log(data.lolPatch[3].champImage);
    loadChamp(data);
})

// CreateElement based on Patch Data
function loadChamp(data){
    champMatch = document.getElementById("block");
    var searchChamp = [];

//search the champion
var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // keyCode 13 is for the "Enter" key
      searchChampion();
    }
});

function searchChampion(){
    var searchString = searchInput.value;
    while (champMatch.firstChild) {
        champMatch.removeChild(champMatch.firstChild);
      }
    for (i = 0; i < data.lolPatch.length; i++){
        if (data.lolPatch[i].champName.includes(searchString)) {
            var div = document.createElement("div");
            champMatch.appendChild(div);
        }
    }
}

    for (i = 0; i < data.lolPatch.length; i++){
        var div = document.createElement("div");
        //styling
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
        '<span style="color: white">' + '<span style="font-weight: 700">' + data.lolPatch[i].champName 
        + '</span>'
        + '<br>'
        +  '<span style="color: #C2C2C2">' + '<span style="font-weight: 500">'+ data.lolPatch[i].champDescription;
        + '</span>'
        champMatch.appendChild(div);

    //wrapping a link to all the divs
    var link = document.createElement("a");
    link.href = "/Pages/champView.html";
    link.appendChild(div);
    link.style.textDecoration = 'none';
    
    champMatch.appendChild(link);
    }
}