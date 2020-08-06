const firebaseConfig = {
    apiKey: "AIzaSyAM6Iq_Y5VAX3nbzMzOs7qiG1uzCKRTK28",
    authDomain: "ui-template-b63c6.firebaseapp.com",
    databaseURL: "https://ui-template-b63c6.firebaseio.com",
    projectId: "ui-template-b63c6",
    storageBucket: "ui-template-b63c6.appspot.com",
    messagingSenderId: "11072010879",
    appId: "1:11072010879:web:1a2371176aa86eb4281d4a",
    measurementId: "G-FRSJSW9871"
};

firebase.initializeApp(firebaseConfig);

//initialize firestore
// let db = firebase.firestore();
// console.info(db)

// Reference messages collection
var messagesRef = firebase.database().ref('contact-info');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();

    //get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('msg');

    // Save message
    saveMessage(name, email, message);

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

    // Function to get form values
    function getInputVal(id){
        return document.getElementById(id).value;
    }
    

// Save message to firebase
function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
}