// task 10
var student_score = [330, 410, 240, 500, 350]
document.write("Score of students: ");
for (let index = 0; index < student_score.length; index++) {
    const element = student_score[index];
    document.write(element + " ");
}
document.write("<br>");
student_score.sort();
document.write("Ordered Score of students: ");
for (let index = 0; index < student_score.length; index++) {
    const element = student_score[index];
    document.write(element + " ");
}
document.write("<br><br><br>");