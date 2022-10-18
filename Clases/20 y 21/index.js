function render() {
	getAPIRest(1);
	renderComponent('navbar', getNavbar('Clase N°20 y N°21'));
}

function renderComponent(id, htmlComponent) {
	document.getElementById(id).innerHTML = htmlComponent;
}

function getAPIRest(page) {
	fetch(`https://reqres.in/api/users?page=${page}`)
		.then((response) => response.json())
		.then((data) => {
			const htmlUsers = getUsers(data.data);
			const htmlPaginator = getPaginator(data);
			renderComponent('users', htmlUsers);
			renderComponent('paginator', htmlPaginator);
		});
}

//Inicializaciones.
render();
