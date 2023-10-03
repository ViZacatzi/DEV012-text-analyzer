import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const button = document.getElementById ("reset-button");
const textarea = document.querySelector ("textarea[name='user-input']");
const wordCount = document.querySelector ("li.list:nth-child(1)");
const characterCount = document.querySelector ("li.list:nth-child(2)");
const characterNoSpacesCount = document.querySelector ("li.list:nth-child(3)");
const numberCount = document.querySelector ("li.list:nth-child(4)");
const numberSum = document.querySelector ("li.list:nth-child(5)");
const wordLengthAverage = document.querySelector ("li.list:nth-child(6)");


button.addEventListener ("click", function () {
    textarea.value = ""
    wordCount.textContent = "Contador de palabras: 0"
    characterCount.textContent = "Contador de carácteres: 0"
    characterNoSpacesCount.textContent = "Contador de carácteres sin espacios: 0"
    numberCount.textContent = "Contador de números: 0"
    numberSum.textContent = "Suma total de números: 0"
    wordLengthAverage.textContent = "Longitud de palabras 0"
});

textarea.addEventListener ("input", function () {

    const texto = textarea.value;

    const wordCountanalizer = analyzer.getWordCount (texto);
    wordCount.textContent = "Contador de palabras: " + wordCountanalizer;

    const characterCountanalizer = analyzer.getCharacterCount (texto);
    characterCount.textContent = "Contador de carácteres: " + characterCountanalizer;

    const characterNoSpacesCountanalizer = analyzer.getCharacterCountExcludingSpaces (texto);
    characterNoSpacesCount.textContent = "Contador de carácteres sin espacios " + characterNoSpacesCountanalizer;

    const numberCountanalizer = analyzer.getNumberCount (texto);
    numberCount.textContent = "Contador de números: " + numberCountanalizer;

    const numberSumanalizer = analyzer.getNumberSum (texto);
    numberSum.textContent = "Suma total de números: " + numberSumanalizer;

    const wordLengthAverageanalizer = analyzer.getAverageWordLength (texto);
    wordLengthAverage.textContent = "Longitud de palabras " + wordLengthAverageanalizer;

    });
