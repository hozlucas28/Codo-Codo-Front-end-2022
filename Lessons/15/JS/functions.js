function add() {
	let result = document.getElementById('result'),
		resultValue = Number(result.innerHTML);

	resultValue++;
	result.innerText = resultValue;
	changeParityValue(resultValue);
}

function subtract() {
	let result = document.getElementById('result'),
		resultValue = Number(result.innerHTML);

	resultValue--;
	result.innerText = resultValue;
	changeParityValue(resultValue);
}

function changeParityValue(number = 0) {
	let parity = document.getElementById('parity');
	let operation = number % 2;

	operation === 0 ? (parity.innerHTML = 'es par.') : (parity.innerHTML = 'es impar.');
}
