const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

function setBlueBackground() {
    document.body.style.backgroundColor = 'blue';
}

function setPinkBackground() {
    document.body.style.backgroundColor = 'pink';
}

function setBrownBackground() {
    document.body.style.backgroundColor = 'brown';
}

function resetBackground() {
    document.body.style.backgroundColor = ''; // або білий за замовчуванням
}

btn1.addEventListener('click', setBlueBackground);
btn2.addEventListener('dblclick', setPinkBackground);
btn3.addEventListener('mouseover', setBrownBackground);
btn3.addEventListener('mouseout', resetBackground);

module.exports = {
    setBlueBackground,
    setPinkBackground,
    setBrownBackground,
    resetBackground
};