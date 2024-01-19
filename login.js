function check() {
  var name = document.getElementById("UserName").value;
  var password = document.getElementById("Password").value;
  if ((name.length<6)&&(password.length<6)) {
    window.alert("please provide the valid Details");
    window.alert("please provide username and password more than 6 character");
    return false;
  }
   if((name.length>6)&&(password.length<6)){
    window.alert("please provide the valid Details");
    window.alert("please provide Password more than 6 character");
    return false;
  }
   if((name.length<6)&&(password.length>6)){
    window.alert("please provide the valid Details");
    window.alert("please provide UserName more than 6 character");
    return false;
  }
   if((name.length>1)&&(password.length>1)){
    window.alert("Login Successfully");
    location.href="model.html";

    return true;
  }
}
