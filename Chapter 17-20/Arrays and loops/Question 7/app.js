// task 7
document.write("<br><br>");
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC bakery. What do you want to order? ")
var match_found = false;
var i;

for (let index = 0; index < a.length; index++) {
    if (search == a[index]) {
        match_found = true;
        i = index
    }

}
if (match_found == true) {
    document.write(search + " is available at index " + i + " in our bakery<br>")
} else {
    document.write("We are sorry. " + search + " is not available in our bakery<br>")
}
document.write("<br><br>");

