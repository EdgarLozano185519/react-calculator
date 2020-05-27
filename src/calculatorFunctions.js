function tokenize(str) {
  let tokens = [];
  let currentString = '';
  for(let currentChar of str) {
    if(!currentChar.match(/[\*\+\/\-]/)) currentString += currentChar;
    else {
      tokens.push(currentString);
      tokens.push(currentChar);
      currentString = '';
    }
  }
  tokens.push(currentString);
  return tokens;
}
