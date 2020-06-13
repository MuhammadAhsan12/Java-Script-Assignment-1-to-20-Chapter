var subject1=prompt("First subject: ")
var subject2=prompt("Second subject: ")
var subject3=prompt("Third subject: ")
var sub_1_marks=prompt("First Subject marks: ")
var sub_2_marks=prompt("Secon Subject marks: ")
var sub_3_marks=prompt("Third Subject marks: ")
var total_marks=100
var total_marks_obt= +sub_1_marks + +sub_2_marks + +sub_3_marks;
var total_marks_t=300
var per=(total_marks_obt/total_marks_t)*100
var per1=(sub_1_marks/total_marks)*100;
var per2=(sub_2_marks/total_marks)*100;
var per3=(sub_3_marks/total_marks)*100;
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>"+subject1 +"</td><td>" +total_marks + "</td><td>"+sub_1_marks +"</td><td>" + per1+ "</td></tr>")
document.write("<tr><td>"+subject2 +"</td><td>" +total_marks + "</td><td>"+sub_2_marks +"</td><td>" + per2+ "</td></tr>")
document.write("<tr><td>"+subject3 +"</td><td>" +total_marks + "</td><td>"+sub_3_marks +"</td><td>" + per3+ "</td></tr>")
document.write("<tr><td colspan=1></td><td>" +total_marks_t + "</td><td>"+total_marks_obt +"</td><td>" + per+ "</td></tr>")