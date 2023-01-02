/* -------------------------------- Variables ------------------------------- */

const firstScoreInput = () => document.getElementById('first-score-input'),
	secondScoreInput = () => document.getElementById('second-score-input'),
	lowerScoreSpan = () => document.getElementById('lower-score-span'),
	highestScoreSpan = () => document.getElementById('highest-score-span'),
	averageScoreSpan = () => document.getElementById('average-score-span');

const firstScoreValue = () => parseFloat(firstScoreInput().value),
	secondScoreValue = () => parseFloat(secondScoreInput().value);

const scores = () => [firstScoreValue(), secondScoreValue()];

/* -------------------------------- Funciones ------------------------------- */

function calculateScores() {
	let aux = 0,
		lowerScore = scores()[0],
		highestScore = scores()[0];

	if (!validateScores(firstScoreValue, secondScoreValue)) return;

	for (let i of scores()) {
		if (i < lowerScore) lowerScore = i;

		if (i > highestScore) highestScore = i;
		aux += i;
	}

	lowerScoreSpan().innerText = String(lowerScore);
	highestScoreSpan().innerText = String(highestScore);
	averageScoreSpan().innerText = String(aux / scores().length);
}

function resetResults() {
	firstScoreInput().value = '';
	secondScoreInput().value = '';
	lowerScoreSpan().innerText = 'XXX';
	highestScoreSpan().innerText = 'XXX';
	averageScoreSpan().innerText = 'XXX';
}

function validateScores() {
	switch (true) {
		case firstScoreValue() < 0 || firstScoreValue() > 10:
			alert('¡Error! La primer nota no esta comprendido entre 0 y 10.');
			resetResults();
			return false;
			break;

		case secondScoreValue() < 0 || secondScoreValue() > 10:
			alert('¡Error! La segunda nota no esta comprendido entre 0 y 10.');
			resetResults();
			return false;
			break;

		default:
			return true;
			break;
	}
}
