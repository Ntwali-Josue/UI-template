const firebaseConfig = {
    apiKey: "AIzaSyAM6Iq_Y5VAX3nbzMzOs7qiG1uzCKRTK28",
    authDomain: "ui-template-b63c6.firebaseapp.com",
    databaseURL: "https://ui-template-b63c6.firebaseio.com",
    projectId: "ui-template-b63c6",
    storageBucket: "ui-template-b63c6.appspot.com",
    messagingSenderId: "11072010879",
    appId: "1:11072010879:web:1a2371176aa86eb4281d4a",
    measurementId: "G-FRSJSW9871"
}

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp(firebaseConfig);

//initialize firestore
let db = firebase.firestore();
// console.info(db)

function validation () {

    //get values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("msg").value;

    error_message.style.padding = "10px";
    let text;

    if(name.length < 5){
        text = "Please enter a valid name";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please enter a valid email";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <= 5){
        text = "Please enter more than 5 characters";
        error_message.innerHTML = text;
        return false;
    }
    else{ 
    text= "Thank you for Your feedback,we'll reach out to you soon!";
    error_message.innerHTML = text;
    return true;
    }
}

//create and adding data

db.collection("contact-info").add({
    name: name,
    email: email,
    message: message
})
.then(function(docRef){
    console.log("successfully added your info: ", docRef.id);
})
.catch(function(error){
    console.error("Failed to add your info: ",error);
})

//reading data

db.collection("contact-info").get().then((querySnapshot) =>{
    querySnapshot.forEach((doc) =>{
        console.log(`${doc.id} => ${doc.data()}`)
    })
})