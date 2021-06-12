guestArray = [];

function submit() {

    var guestName = document.getElementById("name1").value;
    guestArray.push(guestName);

    document.getElementById("display_name").innerHTML = guestArray;


}

function sorting() {
    guestArray.sort();
    var displayArray = guestArray.join("<br>");
    document.getElementById("sorted").innerHTML = displayArray;
}

function show() {
    var displayArray = guestArray.join("<br>");
    document.getElementById("p1").innerHTML = displayArray;
    document.getElementById("sort_button").style.display = "inline-block";
}

function searching() {
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;
    for (j = 0; j < guestArray.length; j++) {
        if (s == guestArray[j]) {
            found = found + 1;
        }
    }
    document.getElementById("p2").innerHTML = "name found " + found + " time/s";
    console.log("found name " + found + " time/s");
}