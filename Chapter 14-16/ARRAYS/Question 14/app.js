// task 14
var dev = [];
dev.push("keyboard");
dev.push("mouse");
dev.push("printer");
dev.push("monitor");
document.write("Devices:<br>" + dev + "<br>")
document.write("Out:<br>" + dev[3] + "<br>");
dev.pop();
document.write("Out:<br>" + dev[2] + "<br>");
dev.pop();
document.write("Out:<br>" + dev[1] + "<br>");
dev.pop();
document.write("Out:<br>" + dev[0] + "<br>");
dev.pop();
document.write("<br><br><br>")