var num1=+prompt("Enter first Number");
var num2=+prompt("Enter second Number");
var op=prompt("Which operation to perform (+,-,*,/,%)");
var result;
if(op=="+"){
    result=num1+num2;
    alert(num1+"+"+num2+"="+result)
}
if(op=="-"){
    result=num1-num2;
    alert(num1+"-"+num2+"="+result)
}
if(op=="*"){
    result=num1*num2;
    alert(num1+"*"+num2+"="+result)
}
if(op=="/"){
    result=num1/num2;
    alert(num1+"/"+num2+"="+result)
}
if(op=="%"){
    result=(num1/num2)*100;
    alert(num1+"%"+num2+"="+result)
}