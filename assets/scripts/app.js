let defaultValue = 0;
let currentResult = defaultValue;
let logEntries = [];

function getUsernumberInput() {
    return parseInt(userInput.value);
}

function writeLog(operation, prevResult, number, newResult) {
    const logEntry = {
        operation: operation,
        prevResult: prevResult,
        number: number,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(num1, num2) {
    //tworzę zmienną na wprowadzoną liczbę, żeby uniknąć potwarzania kodu
    const enteredNumber = getUsernumberInput();
    const initialResult = currentResult;

    //tworzę stałą przechowującą tekstową wersję działania - używam backticków `` żeby zawartość była stringiem
    const calcDescription = `${currentResult} + ${enteredNumber}`;

    //można albo sparsowac userInput.value na inta za pomoca parseInt, albo dodac plusa:
    //currentResult = currentResult + +userInput.value
    //plus przez zmienia na liczbę
    currentResult += enteredNumber;
    outputResult(currentResult, calcDescription);
    writeLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract() {
    const enteredNumber = getUsernumberInput();
    const initialResult = currentResult;
    const calcDecription = `${currentResult} - ${enteredNumber}`;
    currentResult -= enteredNumber;
    outputResult(currentResult, calcDecription);
    writeLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

function multiply() {
    const enteredNumber = getUsernumberInput();
    const initialResult = currentResult;
    const calcDecription = `${currentResult} * ${enteredNumber}`;
    currentResult *= enteredNumber;
    outputResult(currentResult, calcDecription);
    writeLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide() {
    const enteredNumber = getUsernumberInput();
    const initialResult = currentResult;
    const calcDecription = `${currentResult} / ${enteredNumber}`;
    currentResult /= enteredNumber;
    outputResult(currentResult, calcDecription);
    writeLog('DIVIDE', initialResult, enteredNumber, currentResult)
}


//jeśli nie chcemy, żeby funkcja  wykonała sie od razu gdy kod przeczyta przeglądarka, tylko odłożyć jej wykonanie w czasie (możliwe w
//wyjątkowych przypadkach jak eventlistener) to niedajemy nawiasów (wtedy wykona sie od razu).
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

//znak poniżej umożliwia wrzucenie zmiennej wewnątrz stringa wewnątrz {} wraz zeznakiem dolara, żeby wartość pokazała się na stronie
//wewnątrz zwykłych cudzosłowów albo apostrofów dolar nie działa. TAKIE wyrażenie z dolerem nazywa sie template literal
// let calculationDesc = `(${defaultValue} + 10) * 2`;

