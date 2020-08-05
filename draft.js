//reference messages collection

// let contactRef = firebase.database().ref('contact-info');


// //create and adding data

// db.collection("contact-info").add({
//     name: "KARANGWA Ntwali Josue",
//     email: "josh1234king@gmail.com",
//     message: "I'm adding my data"
// })
// .then(function(docRef){
//     console.log("Writen with ID: ", docRef.id);
// })
// .catch(function(error){
//     console.error("Failed to add your doc: ",error);
// })

// //reading data

// db.collection("contact-info").get().then((querySnapshot) =>{
//     querySnapshot.forEach((doc) =>{
//         console.log(`${doc.id} => ${doc.data()}`)
//     })
// })




// //save message to firebase
// function saveMessage(name,email,msg){
//     let newMessageREf = messageRef.push();
//     newMessageREf.set({
//         name: name,
//         email: email,
//         messag: msg
//     })
// }