
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
