 // import {apiKey, apiKey1} from "./util"
 // console.log(`${apiKey} és a ${apiKey1}`);

  //import objektumként
 // import * as util from "./util"
 // console.log(util.apiKey);

 // import {apiKey, apiKey1 as content} from "./util"
 // console.log(content); //az apikey1-nek adtunk egy másik nevet


 // import aDefaultErtekNeveBarmiLehet from "./util"
 // console.log(aDefaultErtekNeveBarmiLehet)

  //változók
  let userMessage = "Hello World";

  const userMessage1 = "Hello World"
   // userMessage1 = " Nem lehet utólag változtatni."
  console.log(userMessage);

  //OPERÁTOROK
  console.log(10 + 5); 
  console.log("Hello" + " World");
  console.log(10 === 5); 

  if (10 === 10) {
    console.log("works");
  }

  //Functions
  function greet(username, message = "hello") {
    console.log("the function is running!," +  username + " " + message);  
    return `Returnnel üdvözöljük + ${username}-t egy üzenettel: ${message} `  
  }

  //const greeting1 = greet("Ferencfarkas", "Szia")>
 //console.log(greeting1); 

 const greeting2 = greet("ZalaiMate", "it's corn!")
 console.log(greeting2); 

 export default (userName, message) => {
    console.log("Nyilfüggvény");
    return userName + message;
 }

 //objektumok

 const user = {
    name: "Max",
    age: 21,
    greet() {
        console.log("Hello!");
        console.log(this.age);
    }
 }
 console.log(user);
 console.log(user.name, user.age);
 user.greet();




 class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("Hi");
    }
 }
 const user1 = new User("Manuel", 35);
 console.log(user1);
 user.greet();

 //tömbök

 const hobbies = ["Sports", "Cooking", "Reading"];;
 console.log(hobbies[1]);

 hobbies.push("Working");

    for (let index = 0; index < hobbies.length; index++) {
        const element = hobbies[index];
        console.log(element);
    } 

    //A findIndex methoddal megtalálhatjuk egy array elemének indexét
  const index =  hobbies.findIndex((item) => {
        return item === "Sports"
     });
    console.log(index);

   const editedHobbies = hobbies.map((item) => item + "!")
   console.log(editedHobbies);

   //Objektumba rendezés
   const objectHobbies = hobbies.map((i) => ({text: i}))
   console.log(objectHobbies);

   //destructuring

   //  const userNameData = ["Ferenc", "Farkas"];

    // const firstName = userNameData[0];
    // const lastName = userNameData[1];

    
    const [firstname, lastname] = ["Ferenc", "Farkas"];

    console.log(firstname);
    console.log(lastname);

    const {name, age} = {
        name:"Perec",
        age:25
    }
    console.log(name, age );

    //spread operator
    const newHobbies = ["programming"];
    const mergedHobbbies = [...hobbies, ...newHobbies ];
    console.log(mergedHobbbies);

    //objektumoknál
    const extendedUser = {
        isAdmin:true,
        ...user
    }
    console.log(extendedUser);

    const password = prompt("Your password");

     if (password === "Hello"){
        console.log("hello works");
     }else if(password === "hello"){
        console.log("hello works");
     }else{
        console.log("Access not garanted");
     }

    if(10 === 10) {
        // ...
     } else if(5 === 5){
         //--- 
        }
        else{

        }

       
    for (const hobby of hobbies) {
        console.log(hobby);
    }