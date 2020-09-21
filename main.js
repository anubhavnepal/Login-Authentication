/*
function validateEmail(checkEmail) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(checkEmail.value) == false) {
    alert("Sucessful");
    return true;
  } else {
    alert("Invalid Email Address");
    return false;
  }
}
*/

function validateEmail() {
  email = document.form.Email.value;

  if (email === "") {
    //when nothing is typed
    document.querySelector(".error-mail").innerHTML = "*Please type your email";
    return false;
  }

  //when '@' is at first
  else if (email.indexOf("@") <= 0) {
    document.querySelector(".error-mail").innerHTML =
      "*Add '@' or fix it's position";
    return false;
  }

  //When '.' is in wrong position
  else if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    document.querySelector(".error-mail").innerHTML =
      "*Add '.' or fix it's position";
    return false;
  } else {
    alert("Successful");
    return true;
  }
}
