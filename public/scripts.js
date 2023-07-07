// Tabbed Menu
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}
document.getElementById("myLink").click();

//Dynamic Time Event
var eventSource = new EventSource("/sse")
eventSource.addEventListener("message", function (e) {
    try {
        var timeData = JSON.parse(e.data);
        let hour = timeData.hr;
        let minute = timeData.min;  
        let second = timeData.sec;
        let periods = "AM";
        if (hour > 11) {
            periods = "PM";
            if (hour > 12){ 
                hour -= 12;
            }    
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        console.log(timeData)
        document.getElementById("test").innerHTML = `${hour}:${minute}:${second} ${periods}`;
    } catch(error){
        console.log(error)
    }
})