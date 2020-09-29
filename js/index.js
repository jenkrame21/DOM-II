// Your code goes here

// Mouseover Technique - Hover Color Change Links
// LINKS

let headerLinks = document.querySelector("nav");
// console.log(headerLinks)

headerLinks.addEventListener("mouseover", function(event){
    event.target.style.color = "orange"
    // reset the color after a short delay
    setTimeout(function() {
        event.target.style.color = "teal";
  }, 500);
}, false);

// Keydown Technique - Press Any Key to Change Background Color & Text Color
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

//  - Wheel Technique - Image Scaling Large and Small
// IMAGES




