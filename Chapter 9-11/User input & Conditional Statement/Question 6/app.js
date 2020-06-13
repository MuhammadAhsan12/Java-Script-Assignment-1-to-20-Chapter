var sub1_marks = prompt("First Subject Marks: ");
var total_1 = prompt("Out of: ")
var sub2_marks = prompt("Second Subject Marks: ");
var total_2 = prompt("Out of: ")
var sub3_marks = prompt("Third Subject Marks: ");
var total_3 = prompt("Out of: ")

var total = +total_1 + +total_2 + +total_3;
var obt_marks = +sub1_marks + +sub2_marks + +sub3_marks;
var per=(obt_marks/total)*100;

document.write("<h1>Marks sheet</h1><br>")
document.write("<br>")
document.write("Total Marks: "+total);
document.write("<br>")
document.write("Obtained Marks: "+obt_marks);
document.write("<br>")
document.write("Percentage: "+per+"%")
document.write("<br>")

if(per>=80){
    document.write("Grade: A-one")
    document.write("<br>")
    document.write("Remarks: Excellent")
}else if(per>=70){
    document.write("Grade: A")
    document.write("<br>")
    document.write("Remarks: Good")
}else if(per>=60){
    document.write("Grade: B")
    document.write("<br>")
    document.write("Remarks: You need to improve")
}else if(per<60){
    document.write("Grade: Fail")
    document.write("<br>")
    document.write("Remarks: Sorry")
} 