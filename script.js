let pixelCounter = 0;
let counter = 0;
let articleBits = [];

console.log("init");

const node = document.getElementById("ref");
const siteHeight = document.body.getBoundingClientRect().height;
const container = document.createElement("div");
node.append(container);
container.classList.add("three-d-container");

const baseItems = document.querySelectorAll(".base");

const base = baseItems[0];
const baseHeight = base.getBoundingClientRect().height;
container.style.perspective = `${baseHeight / 200}px`;

const sizeFixHeight = window.innerHeight / 6;
const animStart = window.innerHeight / 2;

let currentRotations = [];

function init() {
    while (pixelCounter < baseHeight + 200) { //200 is hard coded padding on the bottom
        let sizeFixEle = document.createElement("div");
        sizeFixEle.classList.add("size-fix");
        sizeFixEle.style.height = `${sizeFixHeight}px`;
        let innerContent = base.cloneNode(true);
        //need to remove base from class list first
        innerContent.classList = "";
        innerContent.style.transform = `translateY(${-pixelCounter - counter
            }px)`;
        sizeFixEle.append(innerContent);
        container.append(sizeFixEle);
        articleBits.push(sizeFixEle);
        pixelCounter += sizeFixHeight;
        console.log(pixelCounter + ", " + baseHeight)
    }

    //hide the base element
    base.style.overflow = "hidden";
    base.style.height = 0;


    //set rotation points of each element
    for (let i = 0; i + 1 < articleBits.length; i += 1) {
        //iniitialize current rotation list with zero
        currentRotations[i] = 0;
        //odd
        if (i % 2 != 0) {
            articleBits[i].style.transformOrigin = "bottom";
        } else {
            articleBits[i].style.transformOrigin = "top";
        }
    }

    document.body.style.height = siteHeight;

}
init();

const MAX = 1.5;
const onScroll = (e) => {
    for (let i = 0; i + 1 < articleBits.length; i += 2) {
        container.style.perspectiveOrigin = `50% ${window.pageYOffset}px`;
        articleBits[i].style.transform = `rotateX(${Math.min(0, 
            Math.max(-(animStart - articleBits[i + 1].getBoundingClientRect().top) * 0.01, -MAX))
            }deg)`;
        articleBits[i + 1].style.transform = `rotateX(${Math.max(0, 
            Math.min((animStart - articleBits[i + 1].getBoundingClientRect().top) * 0.01, MAX))
            }deg)`;
    }
};
onScroll();
// window.addEventListener("wheel", (e) => onScroll(e));
window.addEventListener("scroll", (e) => onScroll(e));
