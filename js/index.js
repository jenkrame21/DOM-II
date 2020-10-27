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
// IMAGE

let wheelImage = document.querySelector(".intro img");
// console.log(wheelImage)


function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    // Apply scale transform
    elImg.style.transform = `scale(${scale})`;
}

    let scale = 1;
    const elImg = document.querySelector("img");
    elImg.onwheel = zoom;

// Click Technique - Counting clicks on a Button
// BUTTON

const signUpButton = document.querySelector(".btn");

signUpButton.addEventListener('click', event => {
    signUpButton.innerHTML = `Signup Count: ${event.detail}`;
});

// Load Technique - logs event when page is fully loaded

window.onload = (event) => {
    console.log('The page is fully loaded!');
};

// 