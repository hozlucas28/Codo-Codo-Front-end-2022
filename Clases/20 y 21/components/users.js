//Usuarios - HTML.
function getUsers(usersData) {
	const html = `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                    <th scope="col">Avatar</th>
                </tr>
            </thead>
            <tbody>
                ${usersData.map((i) => getUserDataRow(i)).join('')}
            </tbody>
        </table>
    `;
	return html;
}

//Datos del usuario - Utilidad.
function getUserDataRow(user) {
	const html = `
        <tr>
            <th scope="row">${user.id}</th>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</td>
            <td><img src="${user.avatar}"></td>
        </tr>
    `;
	return html;
}
