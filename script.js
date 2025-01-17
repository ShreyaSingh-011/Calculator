const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const four =document.getElementById("four");
const five=document.getElementById("five");
const six=document.getElementById("six");
const seven=document.getElementById("seven");
const eight=document.getElementById("eight");
const nine=document.getElementById("nine");
const reset=document.getElementById("reset");
const del=document.getElementById("delete");
const mod=document.getElementById("mod");
const  div=document.getElementById("div");
const multiply=document.getElementById("mul");
const add=document.getElementById("add");
const sub=document.getElementById("minus");
const equal=document.getElementById("equalto");
const deci=document.getElementById("point");
const zero=document.getElementById("zero");
const display1=document.getElementById("displayScreen1");
const display2=document.getElementById("displayScreen2");
const buttonss=document.querySelectorAll("button");


let operand1="";
let operand2="";
let operator="";
let decimalPressed1="false";
let decimalPressed2="false";

//evaluation
function evaluate(operand1,operand2,operator){
    const n1=parseFloat(operand1);
    const n2=parseFloat(operand2);
    let res=0;

    switch(operator){
        case "+":
            res=n1+n2;
            break;

        case "-":
            res=n1-n2;
            break;
        case "*":
            res=n1*n2;
            break;
        case "/":
            res=n1/n2;
            break;
        case "%":
            res=n1%n2;
            break;
        default:
            res=0;

    }
    return res;

}


function displayDigits(digit){
  if(operator===""){
    if (digit==="."){
        if(decimalPressed1==="true"){
            digit="";
        }
        else{
            decimalPressed1="true";
        }
    }
    operand1+=digit;
    display2.textContent = operand1;
  }

  if(operator!==""){
    display1.textContent = operand1;
    display2.textContent = "";
    if(digit==="."){
        if(decimalPressed2==="true"){
            digit="";
        }
        else{
            decimalPressed2="false";
        }
    }
    operand2+=digit;
    display2.textContent = operand2;
  }
}

function displayResult(){
    let ans=evaluate(operand1,operand2,operator).toString();
    operand2="";
    operand1=ans;
    operator="";
    display1.textContent = "";
    display2.textContent = ans;
    decimalPressed1="false";
    decimalPressed2="false";
}

//Event Listener
zero.addEventListener("click",function(){
  displayDigits("0");
});
one.addEventListener("click",function(){
    displayDigits("1");
  });
  two.addEventListener("click",function(){
    displayDigits("2");
  });
  three.addEventListener("click",function(){
    displayDigits("3");
  });
  four.addEventListener("click",function(){
    displayDigits("4");
  });
  five.addEventListener("click",function(){
    displayDigits("5");
  });
  six.addEventListener("click",function(){
    displayDigits("6");
  });
  seven.addEventListener("click",function(){
    displayDigits("7");
  });
  eight.addEventListener("click",function(){
    displayDigits("8");
  });
  nine.addEventListener("click",function(){
    displayDigits("9");
  });

//Reset button
reset.addEventListener("click",function(){
    operand1="";
    operand2="";
    operator="";
    display1.textContent="";
    display2.textContent="";
    decimalPressed1="false";
    decimalPressed2="false";
})
del.addEventListener("click",function(e){
    if (operator === "") {
        if (operand1.length>0) {
            if(operand1.charAt(operand1.length-1)==="."){
                decimalPressed1 = "false";
            }
            operand1 = operand1.slice(0,-1);
            display2.textContent = operand1;
        }
    }
    else {
        if (operand2.length>0) {
            if(operand2.charAt(operand1.length-1) === "."){
                decimalPressed2 = "false";
            }
            operand2 = operand2.slice(0,-1);
            display2.textContent = operand2;
        }
    }
});

deci.addEventListener("click", function(){
    displayDigits(".");
});

//opeartor button

add.addEventListener("click",function(){
    if(operator!=="" && operand2!==""){
        operand1 = evaluate(operator,operand1,operand2).toString()+"+";
        operand2 = "";
        display1.textContent = operand1;
        display2.textContent = "";

        operator = "+";
        decimalPressed2 = "false";
    }
    else if(operand1!=="") {
        displayDigits("+");
        operator = "+";
    }
});

sub.addEventListener("click",function(){
    if(operator!=="" && operand2!==""){
        operand1 = evaluate(operator,operand1,operand2).toString()+"-";
        operand2 = "";
        display1.textContent = operand1;
        display2.textContent = "";

        operator = "-";
        decimalPressed2 = "false";
    }
    else if(operand1!=="") {
        displayDigits("-");
        operator = "-";
    }
});

multiply.addEventListener("click",function(){
    if(operator!=="" && operand2!==""){
        operand1 = evaluate(operator,operand1,operand2).toString()+"*";
        operand2 = "";
        display1.textContent = operand1;
        display2.textContent = "";

        operator = "*";
        decimalPressed2 = "false";
    }
    else if(operand1!=="") {
        displayDigits("x");
        operator = "*";
    }
});

div.addEventListener("click",function(){
    if(operator!=="" && operand2!==""){
        operand1 = evaluate(operator,operand1,operand2).toString()+"/";
        operand2 = "";
        display1.textContent = operand1;
        display2.textContent = "";

        operator = "/";
        decimalPressed2 = "false";
    }
    else if(operand1!=="") {
        displayDigits("÷");
        operator = "/";
    }
});

mod.addEventListener("click",function(){
    if(operator!=="" && operand2!==""){
        operand1 = evaluate(operator,operand1,operand2).toString()+"%";
        operand2 = "";
        display1.textContent = operand1;
        display2.textContent = "";

        operator = "%";
        decimalPressed2 = "false";
    }
    else if(operand1!=="") {
        displayDigits("%");
        operator = "%";
    }
});

equal.addEventListener("click",function(){
    displayResult();

});








// Button's Function
buttonss.forEach(button =>{
    button.addEventListener("mousedown",function(e){
        button.style.width = "55px";
        button.style.height = "55px";
        button.style.fontSize = "15px";
        button.style.margin = "5px";
    });
    button.addEventListener("mouseup",function(){
        button.style.width = "65px";
        button.style.height = "65px";
        button.style.fontSize = "20px";
        button.style.margin = "0px";
    });
    button.addEventListener("mouseover",function(e){
        button.style.cursor="pointer";
   });
   button.addEventListener("mouseout",function(e){
    button.style.cursor = "cursor";
})
});
equal.addEventListener("mousedown",function(e){
    equal.style.width = "125px";
    equal.style.margin = "7.5px";

})
equal.addEventListener("mouseup",function(e){
    equal.style.width = "140px";
    equal.style.margin = "0px";
})

document.addEventListener("keydown", function(e) {
    const key = e.key;
    let button;
    if (!isNaN(key)) {
        button = document.getElementById(key);
        displayDigits(key);
    } 
    else if(key === "+"){
        button = add;
        add.click();
    } 
    else if(key === "-"){
        button = sub;
        sub.click();
    } 
    else if(key === "*"){
        button = multiply;
        multiply.click();
    } 
    else if(key === "/"){
        button = div;
        div.click();
    } 
    else if(key === "%"){
        button = mod;
        mod.click();
    } 
    else if(key === "=" || key === "Enter"){
        button = equal;
        equal.click();
    } 
    else if(key === "."){
        button = deci;
        deci.click();
    } 
    else if(key === "del"){
        button = del;
        del.click();
    } 
    else if(key.toLowerCase() === "reset"){
        button = reset;
        reset.click();
    }

    if(button === equal){
        button.style.width = "125px";
        button.style.margin = "7.5px";
        button.style.height = "55px";
        button.style.fontSize = "15px";
    } 
    else if(button){
        button.style.width = "55px";
        button.style.height = "55px";
        button.style.fontSize = "15px";
        button.style.margin = "5px";
    }
});

document.addEventListener("keyup", function(e) {
    const key = e.key;
    let button;

    if(!isNaN(key)){
        button = document.getElementById(key);
    } 
    else if(key === "+"){
        button = add;
    } 
    else if(key === "-"){
        button = sub;
    } 
    else if(key === "*"){
        button = multiply;
    } 
    else if(key === "/"){
        button = div;
    } 
    else if(key === "%"){
        button = mod;
    } 
    else if(key === "=" || key === "Enter"){
        button = equal;
    } 
    else if(key === "."){
        button = deci;
    } 
    else if(key === "del"){
        button = del;
    } 
    else if(key.toLowerCase() === "reset"){
        button = reset;
    }

    if(button === equal){
        button.style.width = "140px";
        button.style.margin = "0px";
        button.style.height = "65px";
        button.style.fontSize = "20px";
    } 
    else if(button){
        button.style.width = "65px";
        button.style.height = "65px";
        button.style.fontSize = "20px";
        button.style.margin = "0px";
    }
});
