

function fizzbizz() {
    
    var num = prompt("enter the number");
    num = parseInt(num);
    if (isNaN(num)){
        alert("please enter valid number");
    }
    for(var i=1; i<=num; i++){
        if(i%3 === 0){
            document.write("fizz");
        }
            if(i%5 === 0){
                document.write("buzz");
            }
            if((i%3 === 0) && (i%5 === 0)){
                document.write("fizzbuzz")
            }
        else{
            document.write(i)
        }

    }

};