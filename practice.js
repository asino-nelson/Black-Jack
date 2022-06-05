
let firstName = "Nelson";
let secondName = "Asino";
 
fullName = firstName + " " + secondName;

console.log(fullName)



let myName = "Linda";
let greeting = "Hi there, ";

function fullGreeting(){
    greeting += myName + "!"
    console.log(greeting)
}
fullGreeting()



let myPoints = 3

function add3Points(){
    myPoints +=3;
    console.log(myPoints)
}

function remove1Point(){
    myPoints -=1;
    console.log(myPoints)
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()



/*
let errorParagraph = document.getElementById("error") ;
console.log(errorParagraph)

function purchase(){
    errorParagraph.textContent = "Something went wrong, please try again";
}
purchase()
*/



let firstCard = 8
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let butn = document.getElementById("btn")

const playGame = () => {
    if (sum <= 20){
        message = "Do you want to withraw a card!"
    }else if (sum === 21){
        message = "Whoooo! Youve got Black Jack"
        hasBlackJack = true
        console.log(hasBlackJack)
    }else{
        message = "Sorry! You are out of the game"
        isAlive = true
        console.log(isAlive)
    }
    console.log(message)
}
butn.addEventListener('click', playGame )






/*
let age = 20 
if (age < 21){
    console.log("You cannot enter the club!")
}else{
    console.log("Welcome to El Rosario Club")
}




let ages = 99
 
if (ages < 100){
    console.log("Not eligible!")
}else if(ages === 100){
    console.log("Here is your birthday card from the KIng")
}else{
    console.log("Not eligible, You've already gotten one")
}

*/


