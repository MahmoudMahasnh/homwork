
function computeFXY() {
    const x = parseFloat(document.getElementById("inputX").value);
    const y = parseFloat(document.getElementById("inputY").value);
    let result;

    if (isNaN(x) || isNaN(y)) {
        alert("Please enter valid numbers for X and Y.");
        return;
    }


    if (x >= 10 && y >= 8) {
        result = Math.pow(y, 3) + Math.pow(y, 3) + 300; 
    } else if (x >= 3 && y >= 7) {
        result = Math.pow(y, 2) + Math.pow(y, 2) + x * y; 
    } else {
        result = x + y; 
    }

    document.getElementById("result").value = result;
}


function clearFields() {
    document.getElementById("inputX").value = "";
    document.getElementById("inputY").value = "";
    document.getElementById("result").value = "";
}
