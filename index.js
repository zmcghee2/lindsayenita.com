const button = document.getElementById("submit")
let age = document.getElementById("age");

button.onclick = function(){
    if (age == 21){
        document.getElementById("answer").innerHTML 
        = "You are old enough to drink!"
    }/*
    else{
        document.getElementById("answer").innerHTML 
        = "You are not old enough to drink."
    }
        */
};