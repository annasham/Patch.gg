
//read lol data
fetch("/JSON/lolPatch.json")
.then(res => res.json())
.then(data => {
    console.log(data.lolPatch[3].champImage);
    loadChamp(data);
})

// CreateElement based on Patch Data
function loadChamp(data){
    searchChamp = document.getElementById("block");
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
        '<span style="color: white">' + '<span style="font-weight: 700">' + data.lolPatch[i].champName 
        + '</span>'
        + '<br>'
        +  '<span style="color: #C2C2C2">' + '<span style="font-weight: 500">'+ data.lolPatch[i].champDescription;
        + '</span>'
        searchChamp.appendChild(div);
    }
}