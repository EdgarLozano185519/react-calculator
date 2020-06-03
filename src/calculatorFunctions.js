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

function reversePolishNotation(tokens) {
  let queue = [];
  let stack = [];
  let precedence = {
    "+": 1, "-": 1,
    "/": 2, "*": 2
  };
  for(let token of tokens) {
    let tokenPrecedence = precedence[token] || 0;
    let expressionPrecedence = stack.length ? precedence[stack[stack.length-1]] : 0;
    if(token.match(/[0-9]+/)) queue.push(token);
    else {
      while(tokenPrecedence <= expressionPrecedence) {
        queue.push(stack.pop());
        expressionPrecedence = stack.length ? precedence[stack[stack.length-1]] : 0;
      }
      stack.push(token);
    }
  }
  while(stack.length) {
    queue.push(stack.pop());
  }
  return queue;
}

function calculate(q) {
  let stack = [];
  for(let token of q) {
    if(token.match(/[0-9]+/)) {
      stack.push(parseFloat(token));
      continue;
    }
    let right = stack.pop();
    let left = stack.pop();
    switch(token) {
      case '*': stack.push(left*right); break;
      case '+': stack.push(left+right); break;
      case '-': stack.push(left-right); break;
      case '/': stack.push(left/right); break;
    }
  }
  return stack.pop();
}

export default function getCalculation(calcString) {
  return calculate(reversePolishNotation(tokenize(calcString)));
}