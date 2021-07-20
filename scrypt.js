$(document).scroll(function() {

    myID1 = document.getElementById("candidate");

    var myScroll = function () {
        var y = window.scrollY;
        if (y >= 350) {
            myID1.className = "candidate af"
        } else {
            myID1.className = "candidate bef"
        }
    };

    window.addEventListener("scroll", myScroll);
});

$(document).scroll(function() {

    myID2 = document.getElementById("job-det-2");

    var myScroll = function () {
        var y = window.scrollY;
        if (y >= 350) {
            myID2.className = "job-det-2"
        } else {
            myID2.className = "job-det-2 bef"
        }
    };

    window.addEventListener("scroll", myScroll);
});




$(document).scroll(function() {

    myID = document.getElementById("anim-hh");

    var myScrollFunc = function (){
        var y = window.scrollY;
        if (y >= 300) {
            myID.className = "horizondal-menu show"
        } else {
            myID.className = "horizondal-menu hide"
        }
    };

    window.addEventListener("scroll", myScrollFunc);
});
