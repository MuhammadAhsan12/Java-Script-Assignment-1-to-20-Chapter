var char_or_num=prompt("Enter any Character: ");
if(isNaN(char_or_num)){
    var i=char_or_num.charCodeAt();
    if(i>=65 && i<=90){
        alert(char_or_num+" is a uppercase letter")
    }else if(i>=97 && i<=122){
        alert(char_or_num+" is a lowercase letter")
    }
}else{
    alert(char_or_num +" is a number");
}