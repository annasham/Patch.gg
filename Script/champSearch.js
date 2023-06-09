//read lol data
fetch("/JSON/lolPatch.json")
  .then(res => res.json())
  .then(data => {
    console.log(data.lolPatch[0].champName);
    console.log(data);
    loadChamp(data);
  });

// CreateElement based on Patch Data
function loadChamp(data) {
  var champMatch = document.getElementById("block");

  // Search the champion
  var searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      searchChampion();
    }
  });

  function searchChampion() {
    var searchString = searchInput.value;
    champMatch.innerHTML = "";
    while (champMatch.firstChild) {
      champMatch.removeChild(champMatch.firstChild);
    }
    for (var i = 0; i < data.lolPatch.length; i++) {
      if (data.lolPatch[i].champName.includes(searchString)) {
        var div = createChampionDiv(data.lolPatch[i]);
        var link = createChampionLink(div, data.lolPatch[i]);

        champMatch.appendChild(link);
      }
    }
  }

  for (var i = 0; i < data.lolPatch.length; i++) {
    var div = createChampionDiv(data.lolPatch[i]);
    var link = createChampionLink(div, data.lolPatch[i]);

    champMatch.appendChild(link);
  }

  function createChampionDiv(champion) {
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
    div.style.backgroundImage = 'url(' + champion.champImage + ')';
    div.style.backgroundRepeat = 'no-repeat';
    div.style.backgroundPosition = 'left center';
    div.style.backgroundSize = '67px';

    div.innerHTML =
      '<span style="color: white">' +
      '<span style="font-weight: 700">' +
      champion.champName +
      '</span>' +
      '<br>' +
      '<span style="color: #C2C2C2">' +
      '<span style="font-weight: 500">' +
      champion.champDescription +
      '</span>';

    return div;
  }

  function createChampionLink(element, champion) {
    var champPageURL =
      "/Pages/champ/" +
      encodeURIComponent(champion.champName.toLowerCase()) +
      ".html";

    var link = document.createElement("a");
    link.href = champPageURL;
    link.appendChild(element);
    link.style.textDecoration = 'none';

    //add an EventListener to open the champion page on click
    link.addEventListener('click', function(event) {
      event.preventDefault(); //this prevents the page from opening all the pages
      window.open(champPageURL, '_blank');
    });
    return link;
  }
}