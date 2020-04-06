$(function () {
    let busena = false;

    function toggleLamp() {

        if (busena) {
            $('.lempOn').hide();
        } else {
            $('.lempOff').hide();
        }
        busena = !busena;
    }
    $('body').click(function () {
toggleLamp();
    });
});
