const display = document.getElementById("display")
function todisplay(input) {
    display.value += input;
}



function calculate() {
    try {
        display.value = eval(display.value);


    } catch (error) {
        display.value = "Error";


    }

}

function clearDisplay() {
    display.value = '';

}
function Delete() {
     display.value = display.value.slice(0,-1);

    

}
