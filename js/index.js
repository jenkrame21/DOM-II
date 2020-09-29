// Your code goes here

// NAV - Hover Color Links
// LINKS

let headerLinks = document.querySelector("nav");
// console.log(headerLinks)

// Mouseover 'orange' to reset color 'teal'
// event.target.style.color = "";  (Resets to default color, usually black)

headerLinks.addEventListener("mouseover", function(event){
    event.target.style.color = "orange"
    // reset the color after a short delay
    setTimeout(function() {
        event.target.style.color = "teal";
  }, 500);
}, false);

// BODY - Keydown Background Color & Change Text Color
// BODY

let bodyBackground = document.querySelector("body");
// console.log(bodyBackground)

bodyBackground.addEventListener("keydown", function(event){
    event.target.style.backgroundColor = "teal"
    event.target.style.color = "white"
    setTimeout(function() {
        event.target.style.backgroundColor = "";
        event.target.style.color = "";
    }, 500)
}, false);

//
