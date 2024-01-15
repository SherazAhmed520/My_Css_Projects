let dark = document.querySelector('#dark');
let light = document.querySelector('#light');
let body = document.querySelector("body");
let p = document.querySelector("#para");
let btn2 = document.querySelector("#btn2");
let more = document.querySelector("#more");


dark.addEventListener("click", () => {
    body.style.backgroundColor = "black";
    p.style.color = "whiteSmoke";
    btn2.style.color = "white"

})
light.addEventListener("click", () => {
    body.style.backgroundColor = "white";
    p.style.color = "gray";
    btn2.style.color = "black"
})

let flag = 0;
btn2.addEventListener("click", () => {
    if (flag == 0) {
        btn2.innerHTML = "Read Less";
        flag = 1;
        more.innerHTML = " adipisicing elit. At adipisci, nobis nihil pariatur, culpa eveniet asperiores commodi facere accusantium enim hic totam dolorem voluptas ratione fuga eius officia nam! Sunt. <br><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores minima quis asperiores aliquam?Nulla, quisquam, soluta vel nemo velit neque, adipisci ducimus facilis corporis eius itaque at! Corporis,amet?";

    }
    else {
        btn2.innerHTML = "Read More";
        more.innerHTML =" ...";
        flag = 0;
    }

})

