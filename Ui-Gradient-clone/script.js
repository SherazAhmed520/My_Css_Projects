const body = document.querySelector("body");
const back = document.querySelector("#back");
const next = document.querySelector("#next");
const mid = document.querySelector("#mid");


next.addEventListener("click", () => {
    let color1 = Math.floor(Math.random() *06091);
    let color2 = Math.floor(Math.random() *08091);
    console.log(color1);
    console.log(color2);
    body.style.background = `linear-gradient(to left, #${color1}, #${color2})`;
    mid.innerHTML = `<span id="code"><i class="fa fa-square" style="color: #${color2}"></i> #${color1} &#8594;
     <i class="fa fa-square" style="color: #${color1}"></i> #${color2} 
     </span>`;
})
