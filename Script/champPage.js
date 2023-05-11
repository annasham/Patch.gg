window.onload = function(){
    //make fetch request to JSON file
    fetch("/JSON/lolPatch.json")
    .then(res => res.json())
    .then(data => {
        console.log(data.lolPatch[0].champAbout);
        console.log(data);

        createChampionPages(data);
    });
}

function createChampionPages(data) {
    if (data && Array.isArray(data.lolPatch)) {
        for (var i = 0; i < data.lolPatch.length; i++) {
            var champion = data.lolPatch[i];
            createChampionPage(champion);
        }
    }
}

function createChampionPage(champion) {
    var champName = champion.champName;
    var champAbout = champion.champAbout;
    var championData = { champName: champName, data: champion };
  
    var template = Handlebars.compile(document.querySelector("#champPage").innerHTML);
    var filled = template(championData);
  
    // Create a new page using the champion name as the file name
    var fileName = champName.toLowerCase().replace(/ /g, "_") + ".html";
    var link = document.createElement("a");
    link.href = "data:text/html;charset=utf-8," + encodeURIComponent(filled);
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}