// task 8
var stuName = ["Usman", "Bilal", "Hamza"];
var marks = [320, 230, 480];
var totalMarks = 500;
for (let index = 0; index < stuName.length; index++) {
    const element = stuName[index];
    const element2 = marks[index];
    var per = (element2 / 500) * 100
    document.write("The Score of " + element + " is " + element2 + ". Percentage: " + per + "%<br>");
}

document.write("<br><br><br>");