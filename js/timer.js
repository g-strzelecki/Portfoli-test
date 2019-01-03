function odliczanie() {
    var today = new Date();
    /* MAIN DATA INFORMATION
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    */

    var hour = today.getHours();
    if (hour < 10) hour = "0" + hour;

    var minute = today.getMinutes();
    if (minute < 10) minute = "0" + minute;

    var second = today.getSeconds();
    if (second < 10) second = "0" + second;

    /* WHOLE DATA INFORMATION
    document.getElementById("clock").innerHTML = day + "/" + month + "/" + year + " | " + hour + ":" + minute + ":" + second;
    */

    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;

    setTimeout("odliczanie()", 1000);
}
