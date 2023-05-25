let hr = 0;
let min = 0;
let sec = 0;
let mm = 0;

timer = true;

function start(){
    timer = true;
    stopwatch();
}
function stop(){
    timer = false;
}
function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    mm = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("mm").innerHTML = "00";
}
function stopwatch(){
    if(timer == true){
        mm = mm + 1;
        if(mm == 100){
            sec = sec + 1;
            mm = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        let a = hr;
        let b = min;
        let c = sec;
        let d = mm;

        if(hr<10){
            a = "0" + a;
        }
        if(min<10){
            b = "0" + b;
        }
        if(sec<10){
            c = "0" + c;
        }
        if(mm<10){
            d = "0" + d;
        }

        document.getElementById("mm").innerHTML = d;
        document.getElementById("sec").innerHTML = c;
        document.getElementById("min").innerHTML = b;
        document.getElementById("hr").innerHTML = a;

        setTimeout("stopwatch()", 10);
    }

}