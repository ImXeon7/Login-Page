
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
const opArray = ['+', '-', '*', '/', '%', 'x', '÷', "mod"];

function replaceOperator() {        //remove first one in succesive operators
    let lastChar = string.at(-1);
    let penLastChar = string.at(-2);
    if(opArray.includes(lastChar) && opArray.includes(penLastChar)) {
        let newString = string.slice(0, -2) + string.slice(-1);
        string = newString;
    }
}

function autoScroll() {
    if (input.scrollWidth > input.clientWidth) { 
      input.scrollLeft = input.scrollWidth; // Scroll to the end
    }
}

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(opArray.includes(e.target.innerHTML) && string == ""){
            return;     //cannot begin input with an operator
        }

        else if(e.target.innerHTML == '='){
            if(input.value == "") {
                return;
            }
            else {
            string = eval(string);
            input.value = string;
            }
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else if(e.target.innerHTML == 'x'){
            string += '*';
            input.value = string;
        }

        else if(e.target.innerHTML == '÷'){
            string += '/';
            input.value = string;
        }

        else if(e.target.innerHTML == 'mod'){
            string += '%';
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        replaceOperator();
        autoScroll();
    })
})

