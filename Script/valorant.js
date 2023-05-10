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
  fetch("../JSON/valPatch.json")
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

      //add a collapse/expand button to each div
      var collapseButton = document.createElement("button");

      collapseButton.innerHTML = "Expand";
      
      //styling the button
      collapseButton.style.marginBottom = "10px";

      //add eventlistener to the buttons
      collapseButton.addEventListener("click", function(){
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
          this.innerHTML = "Expand";
        } else {
          content.style.display = "block";
          this.innerHTML = "Collapse";
        }
      });

      //creating the contentDiv to contain valPatch Updates
      var contentDiv = document.createElement("div");

      //styling the contentDiv
      contentDiv.style.padding = "10px";
      contentDiv.style.display = "none";

      //create an ability list to showcase ability name + attributes (changes)
      //need to create a nested loop for abilities
      for (a = 0; a < data.valPatch[i].Abilities.length; a++){

        //ability name
        var agentAbilities = document.createElement("span");

        agentAbilities.innerHTML = data.valPatch[i].Abilities[a].abilityName;
        agentAbilities.style.color = "#c2c2c2";
        agentAbilities.style.fontWeight = "700";
        agentAbilities.style.fontSize = "12pt";

        //abilityImage
        var abilityImage = document.createElement("img");
        abilityImage.src = "https://media.valorant-api.com/agents/"
      + data.valPatch[i].ID
      + "/abilities/ability1/displayicon.png";
      //styling
        abilityImage.style.width = "45px";

        //ability attributes
        var abilityAttributes = document.createElement("ul");
        abilityAttributes.style.listStyleType = "none";

        //nested for loop
        for (t = 0; t < data.valPatch[i].Abilities[a].Attributes.length; t++){
          var attribute = document.createElement("li");
          attribute.innerHTML = 
            '<span style="font-weight: 700">'
            + '<span style="color: white">'
            + data.valPatch[i].Abilities[a].Attributes[t].Name + ": "
            + '<br>'
            + '<span style="font-weight: 500">'
            + '<span style="color: #C2C2C2">'
            + data.valPatch[i].Abilities[a].Attributes[t].After
            + '<br>';

            //styling
            attribute.style.color = "#C2C2C2";
            attribute.style.fontWeight = "500";
            attribute.style.fontSize = "10pt";
      
            //append attribute
            abilityAttributes.appendChild(attribute);
        }
            //create abilityDiv
            var abilityDiv = document.createElement("div");
            abilityDiv.style.marginBottom = "10px";

            //append
            abilityDiv.appendChild(agentAbilities);
            abilityDiv.appendChild(document.createElement("br"));
            abilityDiv.appendChild(abilityAttributes);

 
      //append content to contentDiv
      contentDiv.appendChild(abilityDiv);
      contentDiv.appendChild(abilityImage);
      
      //append data to the mainDiv
      showAgent.appendChild(div);
      div.appendChild(agentImage);
      div.appendChild(collapseButton);
      div.appendChild(contentDiv);

      showAgent.appendChild(div);
      }
    }
  }