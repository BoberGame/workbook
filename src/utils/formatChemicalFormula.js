const formatFormula = (formula) => {
  const formattedFormula = [];
  let currentElement = '';
  let insideParentheses = false;

  const pushCurrentElement = (elem) => {
    if (currentElement) {
      formattedFormula.push(elem);
      currentElement = '';
    }
  };

  for (let i = 0; i < formula.length; i++) {
    const char = formula[i];
    if (char === '(') {
      pushCurrentElement(currentElement);
      insideParentheses = true;
    } else if (char === ')') {
      pushCurrentElement(<sup key={i}>{currentElement}</sup>);
      insideParentheses = false;
    } else if (insideParentheses && (!isNaN(char) || char === '-' || char === '+')) {
      currentElement += char;
    } else if (!isNaN(char) || char === '-' || char === '+') {
      currentElement += char;
    } else {
      pushCurrentElement(currentElement);
      formattedFormula.push(char);
    }
  }
  pushCurrentElement(currentElement);
  return formattedFormula;
};

const removeSpaces = (str) => str.replace(/\s/g, '');

export { formatFormula, removeSpaces };
