
i = 0;

arr = ["SAV", "SriVV", "SJMHSS"];

function loadSchool() {
    document.getElementById('schoolName').innerHTML = arr[0];
    i = 0;
}

function nextSchool() {
    document.getElementById('schoolName').innerHTML = arr[i];
    ++i;
    i %= arr.length;
}