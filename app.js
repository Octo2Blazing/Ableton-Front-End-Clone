const arrowDown =  `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg id="Layer_1"  version="1.1" viewBox="0 0 512 412" width="12"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z"/></svg>`;
const arrowUp = `<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg  id="Layer_1"  version="1.1" viewBox="0 0 512 412" width="12" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M413.1,327.3l-1.8-2.1l-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6c-7.7,0-14.6,3.4-19.2,8.6L101,324.9l-2.3,2.6  C97,330,96,333,96,336.2c0,8.7,7.4,15.8,16.6,15.8v0h286.8v0c9.2,0,16.6-7.1,16.6-15.8C416,332.9,414.9,329.8,413.1,327.3z"/></svg>`;
const menu = document.querySelector(".menu");
const menuH2 = document.querySelector(".menu>h2");
const menuContent = document.querySelector(".nav-link-list-primary-2");

let isArrowDown = true;

document.querySelector(".arrow").innerHTML = arrowDown;

menuH2.addEventListener("click", ()=>{
  
    menuContent.classList.toggle("expand");

    if(isArrowDown){
        document.querySelector(".arrow").innerHTML = arrowUp;
        menu.style.backgroundColor = "#0000ff";
        menu.style.color = "white";
    }else{
        document.querySelector(".arrow").innerHTML = arrowDown;
        menu.style.backgroundColor = "white";
        menu.style.color = "black";
    }
    isArrowDown = !isArrowDown;
})
