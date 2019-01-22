function counter() {
    let today = new Date();
    /*
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    */

    let hour = today.getHours();
    if (hour < 10) {
        hour = "0" + hour;
    }

    let minute = today.getMinutes();
    if (minute < 10) (
        minute = "0" + minute;
    }

    let second = today.getSeconds();
    if (second < 10) {
        second = "0" + second;
    }

    /*
    document.getElementById("clock").innerHTML = day + "/" + month + "/" + year + " | " + hour + ":" + minute + ":" + second;
    */

    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;

    setTimeout("counter()", 1000);
}

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    counter();
});
