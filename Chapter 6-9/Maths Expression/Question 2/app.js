var a=2,b=1;
var result = --a - --b + ++b + b--;
document.write("a is: "+ a +"<br>");
document.write("b is: "+ b +"<br>");
document.write("Result is: "+ result +"<br>");

document.write("<br>");
document.write("in --a, due to predecrement, value of a became 1 <br>");
document.write("in --b, due to predecrement, value of b became 0 <br>");
document.write("in --a - --b, expression became 1-0 which is equal to 1 <br>");
document.write("in --a - --b + ++b, due to preincrement of b, expression became 1-0+1 <br>");

document.write("in --a - --b + ++b + b--, due to postdecrement of b value of b remain same, expression became 1-0+1+1 and the result became 3 <br>");