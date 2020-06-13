var number = prompt("Enter a number to display its table: ");
if(number|=null){
    
    console.log(number);
    for (let index = 1; index <= 10; index++) {
        document.write(number+"x"+index+"="+ number*index+"<br>")
        
    }
}else{
    number=5;
    for (let index = 1; index <= 10; index++) {
        document.write(number+"x"+index+"="+ number*index+"<br>")
   
    }
}