const elemento1 = document.getElementById("galeria");
const elemento2 = document.getElementById("cambiate");

function cambiar (){
    if(elemento1.className =="list"){
        elemento1.className = "grid";
        elemento2.innerHTML ="Modo lista"
    }else{
        elemento1.className = "list";
        elemento2.innerHTML ="Modo retícula";}
    }
    







