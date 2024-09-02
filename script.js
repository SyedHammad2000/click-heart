
const loveMe= document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clicktimes = 0;

loveMe.addEventListener("click", (e) => {

    clicktimes++;

    if(clicktimes === 1){
        createHeart(e);
    }else{
        times.innerText = clicktimes;
        clicktimes = 0;
    }


})

function createHeart(e){
    const heart = document.createElement("i");
    heart.classList.add("fas");
    heart.classList.add("fa-heart");

    // const x = e.clientX;
    // const y = e.clientY;

    // const leftOffset = e.target.offsetLeft;
    // const topOffset = e.target.offsetTop;

    // const xInside = x - leftOffset;
    // const yInside = y - topOffset;
    // heart.style.top = `${yInside}px`
    // heart.style.left = `${xInside}px`

    loveMe.appendChild(heart);

    times.innerText = clicktimes;

    setTimeout(() => heart.remove(), 5000);

}
