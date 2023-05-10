//collapse
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

  //fetch data from JSON
  fetch("/JSON/valPatch.JSON")
  .then(res => res.json())
  .then(data => {
    console.log(data.valPatch[4].Image);
    // push data into loadAgent()
    loadAgent(data);
  })

  //function that displays the json data on HTML
  function loadAgent(data){
    showAgent = document.getElementById("agentBlock");

    for (i = 0; i < data.valPatch.length; i++){

      //adding the main div
      var div = document.createElement("div");

      //content
      div.innerHTML = 
      '<span style="color: white">' + '<span style="font-weight: 700">'
      + data.valPatch[i].agentName 
      + '<br>'
      + '<span style="color: #C2C2C2">' + '<span style="font-weight: 500">'
      + data.valPatch[i].codeName;

      //div styling
      div.style.width = 351 + "px";
      div.style.backgroundColor = "#2C2C2C";
      div.style.borderRadius = 4 + "px";
      div.style.marginBottom = "10px";

      //add the agent image to the div
      var agentImage = document.createElement("img");
      agentImage.src = "https://media.valorant-api.com/agents/"
      + data.valPatch[i].ID
      + "/displayicon.png";

      //styling image size
      agentImage.style.width = "45px";
      
      //append data to the div
      showAgent.appendChild(div);
      div.appendChild(agentImage);
    }
  }