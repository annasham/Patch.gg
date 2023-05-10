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
    console.log(data.valPatch[0].agentName);
    // push data into loadAgent()
    loadAgent(data);
  })

  function loadAgent(data){
    showAgent = document.getElementById("agentBlock");

    for (i = 0; i < data.valPatch.length; i++){
      var div = document.createElement("div");
      div.innerHTML = 
      data.valPatch[i].agentName 
      + '<br>'

      div.style.width = 351 + "px";
      div.style.backgroundColor = "#2C2C2C";
      div.style.borderRadius = 4 + "px";
      div.style.marginBottom = "10px";

      
      //append data to the div
      showAgent.appendChild(div);

    }
  }