/* ----------------------------- Elementos HTML ----------------------------- */

const buttonAdd = document.getElementById('attach-texts_button-add');

const getInput = () => document.getElementById('attach-texts__input-text');
const getListOfAttached = () => document.getElementById('attach-texts__attached-content__list');
const getInputValue = () => getInput().value;

/* --------------------------------- Eventos -------------------------------- */

buttonAdd.addEventListener('click', () => {
	let input = getInput(),
		inputValue = getInputValue(),
		listOfAttached = getListOfAttached();

	if (inputValue === '') return;

	addToList(listOfAttached, inputValue);
	input.value = '';
});

/* -------------------------------- Funciones ------------------------------- */

function addToList(listOfAttached, inputValue) {
	let li = document.createElement('li');
	listOfAttached.append(li);
	li.innerHTML = inputValue;
}
