const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordCo = text.split(" ");
    return wordCo.filter((word) => word !== "").length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const characterCo = text.length;
    return characterCo;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, '')expresion para quitar caracteres
    const characterout = (/[.,/#!¡¿?$%^&*;:{}=\-_`~()\s]/g, "");
    const specialchar = text.replace(characterout, "");
    const spaceout = specialchar.replace(/\s/g, "");
    const textcharacterCount = spaceout.length;
    return textcharacterCount;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numcount = text.match(/\b\d+(\.\d+)?\b/g);
    if (numcount === null) {
      return 0;
    } else {
      return numcount.length;
    }
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbersum = text.match(/\b\d+(\.\d+)?\b/g);
    let sumtotal = 0;
    if (numbersum === null) {
      return 0;
    } else {
      for (let i = 0; i < numbersum.length; i++) {
        const addition = numbersum[i];
        if (!isNaN(parseFloat(addition))) {
          sumtotal += parseFloat(addition, 10);
        }
      }
    }
    return sumtotal;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    let wordCoLength = 0;
    wordCoLength = text.trim().split(/\s+/);
    const operationwordCoLennth = wordCoLength.reduce(
      (total, word) => total + word.length,
      0
    );
    const longWord = operationwordCoLennth / wordCoLength.length;

    return parseFloat(longWord.toFixed(2));
  },
};
export default analyzer;
