
let count = 0;

function updateCounter() {
    let display = document.getElementById("count");

    display.innerText = count;

    if (count > 0) {
        display.style.color = "#16a34a";
    }
    else if (count < 0) {
        display.style.color = "#dc2626";
    }
    else {
        display.style.color = "#2563eb";
    }
}

function increase() {
    count++;
    updateCounter();
}

function increaseByFive() {
    count += 5;
    updateCounter();
}

function decrease() {
    count--;
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}
