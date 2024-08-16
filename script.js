let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function inputValue(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
        setTimeout(() => display.innerText = '0', 1500);
    }
}
