// task 11
var cities = ["Karachi", "Islamabad", "Peshawar", "Lahore", "Rawalpindi"];
document.write("Cities list:<br>");
for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    document.write(element + " ");
}
document.write("<br>")
var s_cities = cities.slice(1, 4)
document.write("Selected Cities list:<br>");
for (let index = 0; index < s_cities.length; index++) {
    const element = s_cities[index];
    document.write(element + " ");
}
document.write("<br><br><br>");
