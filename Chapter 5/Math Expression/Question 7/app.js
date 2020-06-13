
// task 7
document.write("<h1>Shopping Cart</h1><br>")
document.write("<br>")
var priceItem1=800;
var quantityItem1=8;
var priceItem2=780;
var quantityItem2=12;
var shippingCharges=150;
document.write("Price of item 1= "+priceItem1+"<br>");
document.write("Quantity of item 1= "+quantityItem1+"<br>");
document.write("Price of item 2= "+ priceItem2+"<br>")
document.write("Quantity of item 2= "+quantityItem2+"<br>");
document.write("Shipping Charges= " + shippingCharges+"<br><br><br>");
var total_cost = (priceItem1*quantityItem1)+(priceItem2*quantityItem2)+shippingCharges;
document.write("Total Cost of your order= " + total_cost);
document.write("<br><br><br>");
