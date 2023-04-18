let dte = new Date();
let hours = dte.getHours();
let greeting;
if(hours >= 00 && hours < 12){
    greeting = "Good Morning";
    
}
if(hours >= 12 && hours < 17){
    greeting = "Good Afternoon";

}
if(hours >= 17 && hours < 23){
    greeting = "Good Evening";

}
document.querySelector("#heading").innerHTML = greeting;
