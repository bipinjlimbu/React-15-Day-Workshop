function mainf(){
    console.log("mainLoaded");
    let main=document.querySelector(".mainDiv");
    let button=document.querySelector(".mainButton");
    
    button.addEventListener("Click Me",()=>{
        main.style.backgroundColor="blue";
    });
}
console.log("Loaded");

mainf();