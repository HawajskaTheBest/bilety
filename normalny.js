console.log("normalny.js")

let NORMALNE = 0;

let ULGOWE = 0;

let VIP = 0;

let Suma = 0;

function normal()
{
    NORMALNE++
    console.log(NORMALNE)
    document.getElementById("normal").innerHTML = 'NORMALNE: ' + NORMALNE;
    document.getElementById("money").innerHTML = 'Suma: ' + NORMALNE * 50 ;

};

function ulgowy()
{
    ULGOWE++
    console.log(ULGOWE)
    document.getElementById("redunced").innerHTML = 'ULGOWE: ' + ULGOWE;
    document.getElementById("money").innerHTML = 'Suma: ' + ULGOWE * 20;

};

function vip()
{
    VIP++
    console.log(VIP)
    document.getElementById("VIP").innerHTML = 'VIP: ' + VIP
};


