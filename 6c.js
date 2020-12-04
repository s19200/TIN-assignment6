
function validate(){
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let email = document.getElementById("email");
    let number = document.getElementById("number");
    if( (regex.test(email.value)) && (!isNaN(number.value)) &&(number.value.length>0))
    {
       return true; //document.getElementById("output").value="correct input";
    }
    else {
        return false;//document.getElementById("output").value="incorrect input";
    }
}
function print() {
    if (validate() === true) {
        document.getElementById("output").value = "correct input";
    } else {
        document.getElementById("output").value = "incorrect input";
    }
}