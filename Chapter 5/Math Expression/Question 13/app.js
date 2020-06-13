
// task 13
document.write("<h1>Lifetime Supply Calculator</h1><br>");
document.write("<br>");
var snack="Finger Chips";
var myAge=21;
var maxAge=50;
var maxPerDay=1;
var supplyLeft=((maxAge-myAge)*365)*maxPerDay;
document.write("Favourite Snack: "+snack+"<br>");
document.write("Current Age: "+myAge+"<br>");
document.write("Estimated Maximum Age: "+maxAge+"<br>");
document.write("Amount of Snack per day: "+maxPerDay+"<br>");
document.write("You will need "+supplyLeft+" "+snack+" to last you until the ripe old age of "+maxAge+"<br>");
document.write("<br><br><br>");