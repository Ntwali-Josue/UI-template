function validation () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("msg").value;


    error_message.style.padding = "10px";
    var text;

    if(name.length < 5){
        text = "Please enter valid name";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <= 5){
        text = "Please enter more than 5 characters";
        error_message.innerHTML = text;
        return false;
      }
    else 
    text= "Successfully submitted your message";
    error_message.innerHTML = text;
    return true;
}

