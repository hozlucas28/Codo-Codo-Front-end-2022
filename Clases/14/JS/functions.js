/* --------------------------------------------------------------------------
 * APUNTES:
 *          XXX.
 * 
 * 
 * IMPORTANTE:
 *             - <.value> se utiliza para el caso de los <input>.
 *             - <.innerHTML> se utiliza para el caso de los <label>.
-------------------------------------------------------------------------- */

//Limpiar ingresos y resultados.
function clean() {
	document.getElementById('first-operator').value = '';
	document.getElementById('second-operator').value = '';
	document.getElementById('operator').value = '';
	document.getElementById('result').innerHTML = '';
}

//Calcular operaciones varias.
function calculate() {
	let result;
	let firstOperator = parseFloat(document.getElementById('first-operator').value),
		secondOperator = parseFloat(document.getElementById('second-operator').value),
		operator = document.getElementById('operator').value;

	switch (operator) {
		case '+':
			result = firstOperator + secondOperator;
			break;

		case '-':
			result = firstOperator - secondOperator;
			break;

		case '/':
			secondOperator !== 0 ? (result = firstOperator / secondOperator) : (result = 'ERROR 02');
			break;

		case '*':
			result = firstOperator * secondOperator;
			break;

		default:
			result = 'ERROR 01';
			break;
	}

	if (typeof result !== 'string') {
		document.getElementById('result').innerHTML = result;
	} else {
		result = result.toUpperCase();
		result === 'ERROR 01'
			? (document.getElementById('result').innerHTML = '¡Error! la operación ingresada no es válida para esta aplicación.')
			: (document.getElementById('result').innerHTML = '¡Error! no es posible dividir un número por cero.');
	}
}
