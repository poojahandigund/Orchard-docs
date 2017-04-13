function validate() {
    var emailError = checkEmail();
    var radioError = checkRadio();
    var dropdownError = checkDropdown();
    var checkboxError = checkCheckbox();

    if(emailError && radioError && dropdownError && checkboxError) {
        document.frmOne.submit();
    }
    else{
        return false;
    }
}



function checkEmail() {
    var email = document.frmOne.email.value;
    if(email == "") {
        document.getElementById("email_error").innerHTML = "No email Address";
        return false;
    }
    else{
        document.getElementById("email_error").innerHTML = "";
        return true;
    }
}



function checkRadio () {
    var payment = "";
    var len = document.frmOne.payment.length;    //length is how many radio buttons are in a group
    var i;

    for(i=0; i<len; i++){
        if(document.frmOne.payment[i].checked) {       //i=0 resembles button1, i=1 resembles button2 etc
            payment = document.frmOne.payment[i].value;
            break;
        }
    }

    if(payment == "") {
        document.getElementById("radio_error").innerHTML = "No payment option selected";
        return false;
    }
    else{
        document.getElementById("radio_error").innerHTML = "";
        return true;
    }
}


function checkDropdown () {
    var choosen = "";
    var len = document.frmOne.hear.length;    //length is how many radio buttons are in a group
    var i;

    for(i=0; i<len; i++){
        if(document.frmOne.hear[i].selected) {       //i=0 resembles button1, i=1 resembles button2 etc
            choosen = document.frmOne.payment[i].value;
            
        }
    }

    if(choosen == "none") {
        document.getElementById("dropdown_error").innerHTML = "No option choosen";
        return false;
    }
    else{
        document.getElementById("dropdown_error").innerHTML = "";
        return true;
    }
}


function checkCheckbox() {
    if(document.frmOne.terms.checked) {
        document.getElementById("checkbox_error").innerHTML = "";
        return true;
    }
    else{
        document.getElementById("checkbox_error").innerHTML = "TAC not checked";
        return false;
    }
}   

