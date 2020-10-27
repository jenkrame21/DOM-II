// Your code goes here

// 1. Mouseover Technique - Hover Color Change Links
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

// 2. Keydown Technique - Press Any Key to Change Background Color & Text Color
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

// 3. Wheel Technique - Image Scaling Large and Small
// IMAGE

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

// 4. Click Technique - Counting clicks on a Button
// BUTTON

const signUpButton = document.querySelector(".btn");

signUpButton.addEventListener('click', event => {
    signUpButton.innerHTML = `Signup Count: ${event.detail}`;
});

// 5. Load Technique - logs event when page is fully loaded

window.onload = () => {
    console.log('The page is fully loaded!');
};

// 6. Focus / 7. Blur Technique - focuses on signup forms

const location = document.querySelector('input[placeholder="Location"]');

location.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';    
});

location.addEventListener('blur', (event) => {
    event.target.style.background = '';    
});

// 8. Resize Technique - Window resizer

const heightResult = document.querySelector('#height');
const widthResult = document.querySelector('#width');

function reportWindowSize() {
    heightResult.textContent = window.innerHeight;
    widthResult.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

// 9. Scroll Technique



