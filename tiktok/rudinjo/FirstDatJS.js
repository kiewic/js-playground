let evenClick = false;
// var button = document.getElementById('btn'); // Not necessary
function Click() {
    evenClick = !evenClick;
    if (evenClick) {
        document.body.style.backgroundColor = "red";
        document.getElementById('btn').style.width = '200px';
        document.getElementById('btn').style.height = '200px';
    }
    else {
        document.body.style.backgroundColor = "white";
        document.getElementById('btn').style.width = '100px';
        document.getElementById('btn').style.height = '100px';
    }
    document.getElementById('btn').style.background = random_rgba();
}
function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
}
