//Inicializador.
function render() {
	const htmlNavbar = getNavbar('Clase N°20');
	const htmlUsers = getUsers(USERS_DATA.data);

	document.getElementById('navbar').innerHTML = htmlNavbar;
	document.getElementById('users').innerHTML = htmlUsers;
}

render();
