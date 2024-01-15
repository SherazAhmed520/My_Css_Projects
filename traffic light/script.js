let redLight = document.querySelector("#redLight");
let yellowLight = document.querySelector("#yellowLight");
let greenLight = document.querySelector("#greenLight");
let body = document.querySelector("body");

function start(){
   redLight.style.backgroundColor = "red"
   redLight.style.boxShadow = "5px 10px  45px red"
}

 redLight.addEventListener("mouseenter", ()=>{
    redLight.style.backgroundColor = "red"
    redLight.style.boxShadow = "5px 10px  45px rgb(255, 50, 50)"     
//    redLight.style.transition = "2s ease";
})
yellowLight.addEventListener("mouseenter", ()=>{
    yellowLight.style.backgroundColor = "yellow"
   yellowLight.style.boxShadow = "5px 10px  45px yellow"
})
greenLight.addEventListener("mouseenter", ()=>{
    greenLight.style.backgroundColor = "rgb(44, 200, 9)"
   greenLight.style.boxShadow = "5px 10px  45px lightGreen"
})