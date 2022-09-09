var color_1= document.getElementById("bg_color1");
var color_2= document.getElementById("bg_color2");
var color_3= document.getElementById("bg_color3");
var btnColor1= document.getElementById("btn1");
var btnColor2= document.getElementById("btn2");
var btnColor3= document.getElementById("btn3");


btnColor1.addEventListener("click", ()=>{
    color_1.classList.toggle("bg-warning");
});
btnColor2.addEventListener("click", ()=>{
    color_2.classList.toggle("bg-secondary");
});
btnColor3.addEventListener("click", ()=>{
    color_3.classList.toggle("bg-dark");
});
