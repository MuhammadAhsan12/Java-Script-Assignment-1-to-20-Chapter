// task 9
var color = ["red","blue"]
document.write("Colors:<br>")
for (let index = 0; index < color.length; index++) {
    document.write(color[index]+" ")
}
document.write("<br>")
document.write("<br>");


color.unshift(prompt("Enter a color to add to begining"));
document.write("Updated Colors:<br>")
for (let index = 0; index < color.length; index++) {
    document.write(color[index]+" ")
}
document.write("<br>")
document.write("<br>");

color.push(prompt("Enter a color you want to add to the end"))
document.write("Updated Colors:<br>")
for (let index = 0; index < color.length; index++) {
    document.write(color[index]+" ")
}
document.write("<br>");
document.write("<br>");

color.unshift("orange");
color.unshift("gray");
document.write("Updated Colors:<br>")
for (let index = 0; index < color.length; index++) {
    document.write(color[index]+" ")
}
document.write("<br>");
document.write("<br>");

color.shift();
document.write("Updated Colors:<br>")
for (let index = 0; index < color.length; index++) {
    document.write(color[index]+" ")
}
document.write("<br>");
document.write("<br>");

color.pop();
document.write("Updated Colors:<br>")
for (let index = 0; index < color.length; index++) {
    document.write(color[index]+" ")
}
document.write("<br>");
document.write("<br>");


color.splice(prompt("At which index do you want to add a colo"),0,prompt("What color do you want to add?"));
document.write("Updated Colors:<br>")
for (let index = 0; index < color.length; index++) {
    document.write(color[index]+" ")
}
document.write("<br>");
document.write("<br>");

color.splice(prompt("From which index do you want to start deleting?"),prompt("How many colors do you want to delete?"));
document.write("Updated Colors:<br>")
for (let index = 0; index < color.length; index++) {
    document.write(color[index]+" ")
}
document.write("<br>");
document.write("<br>");