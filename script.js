

var count=0; //declare a global variable

// function for decreasing the number
function decreasevalue(){
    count=count-1;
    document.getElementById("num").innerHTML=count;
    if( count < -9){
        document.getElementById("num").style.marginLeft = "130px";
    }
    if( count > -9){
        document.getElementById("num").style.marginLeft = "170px";
    }
    //adjusting the margin
}

//resetting the value to 0
function reset(){
    count=0;
    document.getElementById("num").innerHTML=count;
    document.getElementById("num").style.marginLeft = "200px"
}

//function for increasing the number
function increase(){
    count=count+1;
    document.getElementById("num").innerHTML=count;
    if( count > 9){
        document.getElementById("num").style.marginLeft = "150px";
    }
    //adjusting the margin
}