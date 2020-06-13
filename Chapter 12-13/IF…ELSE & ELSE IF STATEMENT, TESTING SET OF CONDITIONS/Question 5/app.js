var cpass="saylani"
var pass=prompt("Enter Your Password: ","password is saylani");
if(pass==cpass){
    alert("Correct! The password you entered matches the orignal password")
}else{
    console.log(pass)
    if (pass==""){
        alert("Please Enter your password")
    }else{
        alert("Incorrect Password")
    }
}