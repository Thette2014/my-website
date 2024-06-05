let age;
age = window.prompt("What's your age?");
if(age >= 18){
   window.alert("You can enter this website.");
   console.log("You can enter this website.")
}
else{
    window.alert("You can't enter this website!");
    console.log("You can't enter this website!");
}
function doSomething(){
    document.getElementById("p1").innerHTML = "Baba Boy!"
}