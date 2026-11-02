// script.js - Simple Portfolio Script
document.getElementById("projects").onclick= function(e){
if(e.target.dataset.proj){
    let box = document.getElementById("projectAlert");
    box.textContent = "You clicked:" + e.target.dataset.proj +"☑️☑️";
box.classList.remove("d-none");
    setTimeout(() => box.classList.add("d-none"),3000 );



}
};
document.getElementById("contractForm").onsubmit = function (e) {


























}