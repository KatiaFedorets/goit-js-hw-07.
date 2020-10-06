// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputEl = document.querySelector('#name-input');
let spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === '') {
        spanEl.textContent = 'незнакомец'
    }
    else {
        spanEl.textContent = event.currentTarget.value
    };
};

