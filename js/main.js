const myModule=(()=>{'use strict'
let result=document.getElementById("resul");let btnPeriCua=document.getElementById("perimetroCu"),btnAreaCua=document.getElementById("areaCu"),btnPeriTria=document.getElementById("perimT"),btnAreaTria=document.getElementById("areaT"),btnDiaCi=document.getElementById("diamCi"),btnPeriCi=document.getElementById("perimCi"),btnAreaCi=document.getElementById("areaCi");const perimetroCuadrado=(peri)=>peri*4;const areaCuadrado=(area)=>area*area;let resul;btnPeriCua.addEventListener("click",()=>{let lado=document.getElementById("lado");let valor=Number(lado.value);if(valor==''){resul=`Ingresa valores primero, pedazo de Gil`;result.innerHTML=resul;}else{resul=`El perímetro es: ${perimetroCuadrado(valor)} cms`;result.innerHTML=resul;}});btnAreaCua.addEventListener("click",()=>{let lado=document.getElementById("lado");let valor=Number(lado.value);if(valor==''){const resul=`Ingresa valores primero, pedazo de Gil`;result.innerHTML=resul;}else{const resul=`El área es: ${areaCuadrado(valor)} cm2`;result.innerHTML=resul;}});const perimTriangulo=(lado1,lado2,base)=>lado1+lado2+base;const areaTriangulo=(base,altura)=>(base*altura)/ 2;let result_tria=document.getElementById("resul_tria");btnPeriTria.addEventListener("click",()=>{let lado1=document.getElementById("lado1");let lado2=document.getElementById("lado2");let lado3=document.getElementById("lado3");lado1=Number(lado1.value);lado2=Number(lado2.value);lado3=Number(lado3.value);if(lado1==''||lado2==''||lado3==''){const resul=`Ingresa valores primero, pedazo de Gil`;result_tria.innerHTML=resul;}else{const resul=`El perímetro es: ${perimTriangulo(lado1,lado2,lado3)} cms`;result_tria.innerHTML=resul;}});let result_tria_area=document.getElementById("resul_tria_area");btnAreaTria.addEventListener("click",()=>{let base=document.getElementById("base");let altura=document.getElementById("altura");base=Number(base.value);altura=Number(altura.value);if(base==''||altura==''){const resul=`Ingresa valores primero, pedazo de Gil`;result_tria_area.innerHTML=resul;}else{const resul=`El área es: ${areaTriangulo(base,altura)} cm2`;result_tria_area.innerHTML=resul;}});let pi=Math.PI;const diaCirculo=(radio)=>radio*2;const perimCirculo=(radio)=>diaCirculo(radio)*pi;const areaCirculo=(radio)=>(radio*radio)*pi;let resul_circu=document.getElementById("resul_circu");btnDiaCi.addEventListener("click",()=>{let radio=document.getElementById("radio");radio=Number(radio.value);if(radio==''){const resul=`Ingresa valores primero, pedazo de Gil`;resul_circu.innerHTML=resul;}else{const resul=`El diametro es: ${diaCirculo(radio)} cm2`;resul_circu.innerHTML=resul;}});btnPeriCi.addEventListener("click",()=>{let radio=document.getElementById("radio");radio=Number(radio.value);if(radio==''){const resul=`Ingresa valores primero, pedazo de Gil`;resul_circu.innerHTML=resul;}else{const resul=`El perímetro es: ${perimCirculo(radio)} cm2`;resul_circu.innerHTML=resul;}});btnAreaCi.addEventListener("click",()=>{let radio=document.getElementById("radio");radio=Number(radio.value);if(radio==''){const resul=`Ingresa valores primero, pedazo de Gil`;resul_circu.innerHTML=resul;}else{const resul=`El área es: ${areaCirculo(radio)} cm2`;resul_circu.innerHTML=resul;}})})();
let btnRespo = document.getElementById("respo");

btnRespo.addEventListener("click", mostrar);
let nav = document.getElementById("nav");
let fondo = document.getElementById("fondo");

let items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", ocultar);
})

function mostrar() {
    nav.style.left = "0%";
    fondo.style.display = "block";
}

fondo.addEventListener("click", ocultar);

function ocultar() {
    nav.style.left = "-90%";
    fondo.style.display = "none";
}


