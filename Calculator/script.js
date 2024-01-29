let input = document.getElementById("inputbox");
let string = "";
let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach(button => {
    button.addEventListener('click', e => {
        if (e.target.innerHTML === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = 'Error';
            }
        } else if (e.target.innerHTML === "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === "DEL") {
            string = String(string).slice(0, -1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
