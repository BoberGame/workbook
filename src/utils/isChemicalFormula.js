const isFormula = (str) => {
  // const chemicalFormulaRegExp = /^[A-Z][a-z]?\d*(?:\([A-Z][a-z]?\d*\))?\d*$/;
  const chemicalFormulaRegExp = /[()+-]/;
  return chemicalFormulaRegExp.test(str);
};

export { isFormula };
