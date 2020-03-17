let input = 23;
let result;
result = input + 18;
result -=11;
result *=3;
result /=2;
alert(input);
alert(result);


let defaultValue = 0;
let currenrResult = defaultValue;

currenrResult = (currenrResult + 10) * 2;

//znak poniżej umożliwia wrzucenie zmiennej wewnątrz stringa wewnątrz {} wraz zeznakiem dolara, żeby wartość pokazała się na stronie
//wewnątrz zwykłych cudzosłowów albo apostrofów dolar nie działa. TAKIE wyrażenie z dolerem nazywa sie template literal
let calculationDesc = `(${defaultValue} + 10) * 2`;

outputResult(currenrResult, calculationDesc);

function alert1() {
    alert("Hello")
}

function alert2(name) {
    alert(name)
}

function alert3(par1, par2, par3) {
    const result = par1 + ' ' + par2 + par3
    alert(result)
}

alert1();
alert2("Sawyer")
alert3('hello', 'Sawyer', '!');
