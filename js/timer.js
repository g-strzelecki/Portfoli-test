function counter() {
    let today = new Date();
    /* MAIN DATA INFORMATION
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    */

    let hour = today.getHours();
    if (hour < 10) hour = "0" + hour;

    let minute = today.getMinutes();
    if (minute < 10) minute = "0" + minute;

    let second = today.getSeconds();
    if (second < 10) second = "0" + second;

    /* WHOLE DATA INFORMATION
    document.getElementById("clock").innerHTML = day + "/" + month + "/" + year + " | " + hour + ":" + minute + ":" + second;
    */

    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;

    setTimeout("counter()", 1000);
}

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
});

for (var i = 0; i < 1000000000; i++) { } // This synchronous script is going to delay parsing of the DOM,
// so the DOMContentLoaded event is going to launch later.

function doSomething() {
    console.info("DOM loaded");
}

if (document.readyState === "loading") {  // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", doSomething);
} else {  // `DOMContentLoaded` has already fired
    doSomething();
}
