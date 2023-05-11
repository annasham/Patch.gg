window.onload = function(){
    //make fetch request to JSON file
    fetch("/JSON/lolPatch.json")
    .then(res => res.json())
    .then(data => {
        console.log(data.lolPatch[0].champName);
        console.log(data);

        displayChamp(data);
    })
}

function displayChamp(data) {
    var champNames = ""; // Initialize an empty string to store the champ names
  
    if (data && Array.isArray(data.lolPatch)) {
      for (var i = 0; i < data.lolPatch.length; i++) {
        var champName = data.lolPatch[i].champName;
        champNames += champName + ", ";
      }
      champNames = champNames.slice(0, -2); // Remove the last comma and space
    } else {
      champNames = "Champion Not Found";
    }
  
    var template = Handlebars.compile(document.querySelector("#champPage").innerHTML);
    var filled = template({ 
        champName: champNames
    });
  
    document.querySelector("#block").innerHTML = filled;
  }
  