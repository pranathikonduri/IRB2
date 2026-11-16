'use strict';

function parseAmount(input) {
  if (input === null || input === undefined) {
    throw new Error('Amount is required.');
  }

  if (typeof input !== 'string' && typeof input !== 'number') {
    throw new Error('Invalid amount type.');
  }

  let cleanedInput = input;

  if (typeof cleanedInput === 'string') {
    cleanedInput = cleanedInput.trim();

    if (cleanedInput === '') {
      throw new Error('Amount is required.');
    }
  }

  const numericValue = Number(cleanedInput);

  if (Number.isNaN(numericValue)) {
    throw new Error('Amount must be a valid number.');
  }

  if (numericValue <= 0) {
    throw new Error('Amount must be greater than zero.');
  }

  return numericValue;
}

const partOneSamples = ['500', ' 250 ', '', 'abc', null, undefined, '12.5.3'];
const partOneResults = [];

for (const sample of partOneSamples) {
  try {
    const parsedValue = parseAmount(sample);
    partOneResults.push({ input: sample, value: parsedValue });
  } catch (error) {
    partOneResults.push({ input: sample, error: error.message });
  }
}


const BANK_NAME = 'JS National Bank';
let transactionCounter = 0;
var hoistedValue = 'I was hoisted';

try {
  const letValue = 'I am in the temporal dead zone';
  const unusedValue = letValue;
} catch (error) {
  const letError = error.message;
}

function announce() {
  return 'Announcement fired successfully.';
}

var notify = function () {
  return 'Notification fired successfully.';
};


const varLoopValues = [];
for (var i = 0; i < 3; i += 1) {
  varLoopValues.push(i);
}

const letLoopValues = [];
for (let i = 0; i < 3; i += 1) {
  letLoopValues.push(i);
}



const finalState = {
  bankName: BANK_NAME,
  transactionCounter,
  partOneResults,
  hoistedValue,
  varLoopValues,
  letLoopValues,
  declarationResult: announce(),
  functionExpressionResult: notify()
};

module.exports = finalState;
