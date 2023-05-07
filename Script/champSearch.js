
//read lol data
fetch("../lolPatch.json")
.then(res => res.json())
.then(data => {
    const champData = data;
    console.log(data);
})

// Create element:
