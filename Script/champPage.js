window.onload = function(){

    //fills template onload
    fill_template();

    fetch('/JSON/lolPatch.JSON')
    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        fill_template(data);
        console.log(data);
    })
    .catch(function(error) {
        console.log('Error fetching data', error);
    });
};

function fill_template(data){
    var champName = "Patch Notes for: "

    //If the data object is available and contains the champName property, 
    //it appends the value of champName from the JSON data. 
    //Otherwise, it appends "Unknown Champion" as a default value.

    if (data && data.champName){
        data += data.lolPatch[i].champName;
    } else {
        champName += "Champion Not Found";
    }

    var template = Handlebars.compile(document.querySelector("#champPage").innerHTML);
    var filled = template({ champName: champName, footer: "haha this is a footer" });
    
        noEscape: true //this makes sure it doesn't escape HTML
        document.querySelector("#output").innerHTML = filled;
}