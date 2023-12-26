function handleTimeout() {
    console.log("Timed Out");
}

const handleTimeout2 = () => {
    console.log("Timed out... Again!");
}

setTimeout(handleTimeout, 2000);

setTimeout(handleTimeout2 , 3000);
setTimeout(() => {console.log("More Timing out")}, 4000);



 

function greeter(greetFn){
    greetFn();
}
greeter(() => console.log("Hi"))



function init(){
    function greet(){
        console.log("hi");
    }
     
}
//greet(); A scope miatt nem tudunk fügvényen belüli függvényt 
//meghívni az azt tartalmazó függvényen kívül

init();



let userMessage = "Hello" //Primitív érték
userMessage = "Hello There";

const hobbies = ["sports", "Cooking"];
hobbies.push("Working");
console.log(hobbies);