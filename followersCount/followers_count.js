let count = 0

function increaseCount() {
    count += 1
    displayCount()
    checkCountValue()
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count
}

function checkCountValue() {
    if (count === 10) {
        alert("10 followers")
    } else if (count == 20) {
        alert("20 followers")
    }
}