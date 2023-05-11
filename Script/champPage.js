window.onload = function(){
    //make fetch request to JSON file
    fetch("/JSON/lolPatch.json")
    .then(res => res.json())
    .then(data => {
        console.log(data.lolPatch[0].champSplash);
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
    var champSplash = champion.champSplash;
    var champDescription = champion.champDescription;
    var championData = { 
        champSplash: champSplash, 
        champName: champName, 
        champDescription: champDescription,
        data: champion };
  
    var template = Handlebars.compile(document.querySelector("#champPage").innerHTML);
    var filled = template(championData);

    var newPage = window.open("", "_blank");

    var htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>${champName}</title>
        <link rel="stylesheet" href="/Styles/champView.css">
    </head>
    <body>
        ${filled}
    </body>
    </html>
`;
    // newPage.document.write(filled); 
    newPage.document.write(htmlContent); 
    newPage.document.close();
 
}