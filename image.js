    $(document).ready(function() {

var rand = Math.floor((Math.random()*4)+1) //random number between 1 and 4

$("body").css({ "background": "url(image" + rand + ".jpg)",
                "background-size": "100% 100%",
                "background-repeat": "no-repeat"
             });
});
