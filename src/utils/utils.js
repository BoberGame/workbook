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

  const isOperator = (char) => char === '+' || char === '-';

  for (let i = 0; i < formula.length; i++) {
    const char = formula[i];
    const prevChar = formula[i - 1];
    const isClosingBracket = char === ')' && isNaN(prevChar) && isOperator(prevChar);
    const isNumber = !isNaN(char) || isOperator(char);

    if (char === '(' && !isNaN(formula[i + 1])) {
      pushCurrentElement(currentElement);
      insideParentheses = true;
    } else if (isClosingBracket) {
      pushCurrentElement(<sup key={i}>{currentElement}</sup>);
      insideParentheses = false;
    } else if (insideParentheses && isNumber) {
      currentElement += char;
    } else if (isNumber) {
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

const isFormula = (str) => {
  // const chemicalFormulaRegExp = /^[A-Z][a-z]?\d*(?:\([A-Z][a-z]?\d*\))?\d*$/;
  const chemicalFormulaRegExp = /[+-]/;
  return chemicalFormulaRegExp.test(str);
};

export { formatFormula, removeSpaces, isFormula };
