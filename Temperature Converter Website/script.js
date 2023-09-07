var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel");

function roundNumber(number) {
    return Math.round(number * 100) / 100
}


cel.addEventListener('input', function () {
    let c = this.value;
    let f = (c * 9 / 5) + 32;
    let k = (f - 32) * 5 / 9 + 273.15;
    fah.value = roundNumber(f);
    kel.value = roundNumber(k);
});
fah.addEventListener('input', function () {
    let f = this.value;
    let c = (f - 32) * 5 / 9;
    let k = c + 273.15;
    cel.value = roundNumber(c);
    kel.value = roundNumber(k);
});
kel.addEventListener('input', function () {
    let k = this.value;
    let c = k - 273.15;
    let f = (k - 273.15) * 9 / 5 + 32;
    cel.value = roundNumber(c);
    fah.value = roundNumber(f);
});

let btn = document.querySelector('.button button')

btn.addEventListener('click', () => {
    cel.value = ""
    fah.value = ""
    kel.value = ""
})