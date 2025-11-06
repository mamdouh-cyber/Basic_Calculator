let display = document.getElementById("result");

function appendToResult(value) {
    if (display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
    
    display.style.animation ="pulse 0.2s ease-in-out";
    setTimeout(() => {
        display.style.animation = "";
    } , 200);
}

function clearResult() {
    display.value ="";
    
    display.style.background = "rgba(255,182,193,0.9)";
    setTimeout(() => {
        display.style.background = "rgba(255 , 255 , 255 , 0.9)";
    } , 200);
}

function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0 , -1);
    } else{
        display.value = "";
    }
}

function Calculate() {
    try {
        let expression = display.value.replace(/÷/g, "/");

        let result = eval(expression);
        
        //if (result % 1 !== 0) {
            //result = parsefloat(result.toFixed(8));
        //}
        
        display.value = result;
        
        display.style.background =  "rgba(144 , 238 , 144 , 0.9)";
        setTimeout(() => {
            display.style.background = "rgba(255 , 255 , 255 , 0.9)"
        }, 500);
    } catch(error) {
        display.value = "Error";
        
        display.style.background = "rgba(255 , 182 , 193 , 0.9)";
        setTimeout(() => {
            display.style.background = "rgba(255 , 255 , 255 , 0.9)";
        }, 1000);
    }
}

document.addEventListener("keydown" , function(event) {
    const key = event.key;
    
    if("0123456789".includes(key)) {
        appendToResult(key);
    }else if(key === "+") {
        appendToResult("+");
    }else if(key === "-") {
        appendToResult("-");
    }else if(key === "*") {
        appendToResult("*");
    }else if(key === "/") {
        event.preventDefault();
        appendToResult("/");
    }else if(key === ")") {
        appendToResult(")");
    }else if(key === "(") {
        appendToResult("(");
    }else if(key === "Enter" || key === "=") {
        calculate();
    }else if(key === "Escape" || key === "c" || key === "C") {
        clearLast();
    }else if(key === "Backspace") {
        deleteLast();
    }else if(key === ".") {
        appendToResult(".");
    }
});