// task 7
var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("Qualification<br><br>");
for (let index = 0; index < qual.length; index++) {
    const element = qual[index];
    document.write(index + 1 + ") " + element + "<br>");
}
document.write("<br><br><br>")
