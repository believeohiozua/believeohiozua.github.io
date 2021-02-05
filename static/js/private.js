
function myTypewriter(id, text) {
    var i = 0;
    var txt = text
    var speed = 100;
    function typeWriter() {
        document.getElementById(id).innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    var writer = document.getElementById(id)
    if (writer !== null) {
        typeWriter();
    }
}