/* ---------------------------------- JSON ---------------------------------- */

function personData() {
	const Person = {
		DNI: 1234,
		name: 'Carlos',

		account: {
			type: 'CC',
			number: '012-132132-21321'
		},

		addresses: [
			{
				type: 'Postal',
				street: 'Calle-1',
				streetHeight: 1234
			},
			{
				type: 'Legal',
				street: 'Calle-2',
				streetHeight: 1235
			}
		]
	};
	return Person;
}

/* -------------------------------- Funciones ------------------------------- */

//Mostrar JSON.
function showData() {
	const JSON = personData();
	const account = getAccount(JSON.account);
	const addresses = getAddresses(JSON.addresses);
	const DNIAndName = getDNIAndName(JSON.DNI, JSON.name);
	document.getElementById('JSON__data').innerHTML = DNIAndName;
	document.getElementById('JSON__account').innerHTML = account;
	document.getElementById('JSON__address').innerHTML = addresses;
}

//DNI y Nombre.
function getDNIAndName(DNI, name) {
	const html = `<p>${name} - ${DNI}</p>`;
	return html;
}

//Dirección.
function getAddresses(addresses) {
	let html = `<ul>`;
	const aux = addresses.map((address) => `<li>${address.street}, ${address.streetHeight}, ${address.type}</li>`);

	html += aux.join('');
	html += `</ul>`;
	return html;
}

//Cuenta.
function getAccount(account) {
	const html = `<p>Tipo: ${account.type}</br>Nro: ${account.number}</p>`;
	return html;
}
