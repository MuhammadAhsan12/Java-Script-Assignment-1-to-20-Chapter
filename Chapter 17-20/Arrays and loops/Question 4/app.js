// task 4
var num_table = prompt("Enter a number to show its multiplication table: ");
var num_to = prompt("Enter Length of multiplication table: ")

document.write("Multiplication table of: " + num_table + "<br>");
document.write("Length: " + num_to + "<br><br>")

for (let index = 1; index <= num_to; index++) {
    document.write(num_table + "x" + index + "=" + num_table * index + "<br>")

}
document.write("<br><br><br>")