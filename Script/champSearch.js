
//read lol data
fetch("/JSON/lolPatch.json")
.then(res => res.json())
.then(data => {
    console.log(data.lolPatch[0].champName);
    loadChamp(data);
})

// CreateElement based on Patch Data
function loadChamp(data){
    searchChamp = document.getElementById("block");
    for (i = 0; i < data.lolPatch.length; i++){
        var div = document.createElement("div");
        div.style.width = 326 + "px";
        div.style.height = 105 + "px";
        div.style.backgroundColor = "#2C2C2C";
        div.style.borderRadius = 4 + "px";
        div.style.marginBottom = "10px";
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.style.textAlign = "left";
        div.innerHTML = 
        data.lolPatch[i].champName 
        + '<br>' + data.lolPatch[i].champDescription;
        searchChamp.appendChild(div);
    }
}