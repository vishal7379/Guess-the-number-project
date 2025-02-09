var number=document.getElementById("num");
var answer;

function changed(){
    answer=Math.floor(Math.random()*100);
    alert("The number is changed");
    var para=document.getElementById("message");
    para.innerHTML='';

}

answer=Math.floor(Math.random()*100);

function checked(){
    if(number.value==''){
        alert("Please write the number");
    }
    else if(number.value>answer){
        // alert("The number is less than " + number.value);
        var para=document.getElementById("message");
        para.innerHTML="The number is less than " + number.value;
        para.style.color="red";
        para.style.fontSize="20px"
        
        number.value='';

    }
    else if(number.value<answer){
        var para=document.getElementById("message");
        para.innerHTML="The number is greater than " + number.value;
        para.style.color="red";
        para.style.fontSize="25px"
        number.value='';

    }
    else{
        //alert("Congrats, you have correctly guessed the number " + answer);
        var para=document.getElementById("message");
        para.innerHTML="Congrats, you have correctly guessed the number " + answer;
        para.style.color="green";
        para.style.fontSize="25px"
        number.value='';
        answer=Math.floor(Math.random()*100);

    }
}
